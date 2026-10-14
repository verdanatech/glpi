<?php

declare(strict_types=1);

/**
 * Automatic page break tests for the flowing cursor methods.
 *
 * @package com.tecnick.tcpdf
 */

require_once __DIR__ . '/TcpdfTestCase.php';

class TcpdfPageBreakTest extends TcpdfTestCase
{
    private const IMAGE = __DIR__ . '/../examples/images/logo_example.png';

    /**
     * Create a LETTER document with 20mm margins and an 11pt font.
     */
    private function newFlowPdf(): TCPDF
    {
        $pdf = $this->newPdf('P', 'mm', 'LETTER');
        $pdf->setMargins(20, 20, 20);
        $pdf->setAutoPageBreak(true, 20);
        $pdf->AddPage();
        $pdf->setFont('helvetica', '', 11);
        return $pdf;
    }

    /**
     * Row pitch of a Write() call with the given height parameter.
     */
    private function rowPitch(TCPDF $pdf, float $height): float
    {
        return max($height, $pdf->getCellHeight($pdf->getFontSize()));
    }

    public function testWriteBreaksPageAndKeepsAllText(): void
    {
        $pdf = $this->newFlowPdf();
        $total = 80;
        for ($idx = 1; $idx <= $total; ++$idx) {
            $pdf->Write(5, 'Line ' . $idx . ' of ordinary body text.' . "\n");
        }

        $this->assertSame(2, $pdf->getPage());
        $this->assertLessThanOrEqual($pdf->getPageHeight() - 20, $pdf->GetY(), 'the cursor must stay on the page');

        $text = $this->extractText($pdf);
        for ($idx = 1; $idx <= $total; ++$idx) {
            $this->assertStringContainsString('Line ' . $idx . ' of', $text, 'line ' . $idx . ' must be rendered');
        }
    }

    public function testWriteCursorFollowsTheBreak(): void
    {
        $pdf = $this->newFlowPdf();
        $pitch = $this->rowPitch($pdf, 5);
        $pdf->setY($pdf->getPageHeight() - 20 - ($pitch / 2));

        $pdf->Write(5, 'broken' . "\n");
        $this->assertSame(2, $pdf->getPage());
        $this->assertEqualsWithDelta(20 + $pitch, $pdf->GetY(), 0.001, 'the cursor must restart below the top margin');
        $this->assertSame(20.0, $pdf->GetX(), 'ln must reset X to the left margin');
    }

    public function testWriteFlowingAcrossPagesKeepsCursorOnTheLastPage(): void
    {
        $pdf = $this->newFlowPdf();
        $pitch = $this->rowPitch($pdf, 5);
        $perpage = (int) floor(($pdf->getPageHeight() - 40) / $pitch);
        $total = (2 * $perpage) + 36;

        $txt = '';
        for ($idx = 1; $idx <= $total; ++$idx) {
            $txt .= 'Line ' . $idx . ' of ordinary body text.' . "\n";
        }

        $pdf->Write(5, $txt);
        $this->assertSame(3, $pdf->getPage(), 'the flow must end on the third page');
        $this->assertEqualsWithDelta(20 + (36 * $pitch), $pdf->GetY(), 0.001, 'the cursor must follow the text');

        $text = $this->extractText($pdf);
        $this->assertStringContainsString('Line 1 of', $text);
        $this->assertStringContainsString('Line ' . $total . ' of', $text);
    }

    public function testWriteKeepsWritingWhenAutoPageBreakIsDisabled(): void
    {
        $pdf = $this->newFlowPdf();
        $pdf->setAutoPageBreak(false, 20);
        $pdf->setY(240);

        $total = 8;
        for ($idx = 1; $idx <= $total; ++$idx) {
            $pdf->Write(5, 'Line ' . $idx . ' of ordinary body text.' . "\n");
        }

        $this->assertSame(1, $pdf->getPage(), 'no page must be added when the break is disabled');

        // Legacy keeps writing past the bottom margin instead of dropping the
        // overflowing lines.
        $text = $this->extractText($pdf);
        for ($idx = 1; $idx <= $total; ++$idx) {
            $this->assertStringContainsString('Line ' . $idx . ' of', $text, 'line ' . $idx . ' must be rendered');
        }
    }

    public function testColumnMarginsFollowTheSelectedColumn(): void
    {
        $pdf = $this->newFlowPdf();
        $pdf->setEqualColumns(3, 55);

        $pdf->selectColumn(0);
        $first = $pdf->getMargins();
        $this->assertIsArray($first);
        /** @var array{left: float, right: float} $first */
        $this->assertEqualsWithDelta(20.0, $first['left'], 0.001);
        $this->assertEqualsWithDelta($pdf->getPageWidth() - 75.0, $first['right'], 0.001);

        $pdf->selectColumn(1);
        $second = $pdf->getMargins();
        $this->assertIsArray($second);
        /** @var array{left: float, right: float} $second */
        $this->assertEqualsWithDelta($pdf->GetX(), $second['left'], 0.001, 'the column edge is the left margin');
        $this->assertEqualsWithDelta(
            $pdf->getPageWidth() - $second['left'] - 55.0,
            $second['right'],
            0.001,
            'the column width is the writable width',
        );

        // A cell with ln = 1 returns to the column edge, not to the page one.
        $pdf->Cell(50, 5, 'in the second column', 0, 1);
        $this->assertEqualsWithDelta($second['left'], $pdf->GetX(), 0.001);

        $pdf->resetColumns();
        $reset = $pdf->getMargins();
        $this->assertIsArray($reset);
        /** @var array{left: float, right: float} $reset */
        $this->assertEqualsWithDelta(20.0, $reset['left'], 0.001);
        $this->assertEqualsWithDelta(20.0, $reset['right'], 0.001);
    }

    public function testWriteFillsTheColumnsBeforeAddingAPage(): void
    {
        $pdf = $this->newFlowPdf();
        $pdf->setEqualColumns(3, 55);
        $pdf->selectColumn(0);

        $total = 120;
        for ($idx = 1; $idx <= $total; ++$idx) {
            $pdf->Write(5, 'L' . $idx . ' text.' . "\n");
        }

        $this->assertSame(1, $pdf->getPage(), 'three columns must hold the text of a single page');
        $this->assertSame(2, $pdf->getColumn(), 'the flow must end in the last column');

        $text = $this->extractText($pdf);
        for ($idx = 1; $idx <= $total; ++$idx) {
            $this->assertStringContainsString('L' . $idx . ' text.', $text, 'line ' . $idx . ' must be rendered');
        }
    }

    public function testCellFillsTheColumnsBeforeAddingAPage(): void
    {
        $pdf = $this->newFlowPdf();
        $pdf->setEqualColumns(3, 55);
        $pdf->selectColumn(0);

        $total = 120;
        for ($idx = 1; $idx <= $total; ++$idx) {
            $pdf->Cell(50, 5, 'L' . $idx . ' text.', 0, 1);
        }

        $this->assertSame(1, $pdf->getPage(), 'three columns must hold the text of a single page');
        $this->assertSame(2, $pdf->getColumn(), 'the flow must end in the last column');

        $text = $this->extractText($pdf);
        $this->assertStringContainsString('L1 text.', $text);
        $this->assertStringContainsString('L' . $total . ' text.', $text);
    }

    public function testColumnsRestartOnTheNextPage(): void
    {
        $pdf = $this->newFlowPdf();
        $pdf->setEqualColumns(3, 55);
        $pdf->selectColumn(0);

        for ($idx = 1; $idx <= 300; ++$idx) {
            $pdf->Write(5, 'L' . $idx . ' text.' . "\n");
        }

        $this->assertSame(3, $pdf->getPage());
        $this->assertSame(0, $pdf->getColumn(), 'a new page must restart in the first column');

        $text = $this->extractText($pdf);
        $this->assertStringContainsString('L300 text.', $text);
    }

    public function testAcceptPageBreakOverrideBlocksTheBreak(): void
    {
        $pdf = new class('P', 'mm', 'LETTER', true, 'UTF-8', false) extends TCPDF {
            public int $calls = 0;

            public function AcceptPageBreak()
            {
                ++$this->calls;
                return false;
            }
        };
        $pdf->setPrintHeader(false);
        $pdf->setPrintFooter(false);
        $pdf->setMargins(20, 20, 20);
        $pdf->setAutoPageBreak(true, 20);
        $pdf->AddPage();
        $pdf->setFont('helvetica', '', 11);

        for ($idx = 1; $idx <= 60; ++$idx) {
            $pdf->Cell(0, 5, 'line ' . $idx, 0, 1);
        }

        $this->assertSame(1, $pdf->getPage(), 'the override must prevent the automatic break');
        $this->assertGreaterThan(0, $pdf->calls, 'the override must be consulted');
        $this->assertLessThan(60, $pdf->calls, 'the override must only be consulted for content that does not fit');
    }

    public function testImageFollowsTheCursorAcrossAnAutomaticBreak(): void
    {
        $pdf = $this->newFlowPdf();
        $pdf->setY(230);
        $pdf->Image(self::IMAGE, null, null, 50, 50);

        $this->assertSame(2, $pdf->getPage());
        $this->assertEqualsWithDelta(70.0, $pdf->getImageRBY(), 0.001, 'the image must start at the top margin');
    }

    public function testImageWithExplicitYIsNotMoved(): void
    {
        $pdf = $this->newFlowPdf();
        $pdf->setY(230);
        $pdf->Image(self::IMAGE, 20, 230, 50, 50);

        $this->assertSame(1, $pdf->getPage());
        $this->assertEqualsWithDelta(280.0, $pdf->getImageRBY(), 0.001, 'an explicit ordinate must be preserved');
    }
}
