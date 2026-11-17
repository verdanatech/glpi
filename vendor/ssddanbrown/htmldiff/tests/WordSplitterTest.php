<?php namespace Ssddanbrown\HtmlDiff\Tests;

use PHPUnit\Framework\TestCase;
use Ssddanbrown\HtmlDiff\WordSplitter;

class WordSplitterTest extends TestCase
{
    public function test_it_splits_words_and_html()
    {
        $content = '<p>Hello<span>there shiny new</span> World!</p>';
        $output = WordSplitter::convertHtmlToListOfWords($content, []);

        $this->assertEquals(['<p>', 'Hello', '<span>', 'there', ' ', 'shiny', ' ', 'new', '</span>', ' ', 'World!', '</p>',], $output);
    }

    public function test_it_considers_accents_part_of_words()
    {
        $content = '<p>Voix, déjà naïve, über rôle.</p>';
        $output = WordSplitter::convertHtmlToListOfWords($content, []);

        $this->assertEquals(['<p>', "Voix,", ' ', "déjà", ' ', "naïve,", ' ', "über", ' ', "rôle.", '</p>',], $output);
    }

    public function test_it_considers_other_languages()
    {
        // Hebrew
        $content = '<p>שלום עולם</p>';
        $output = WordSplitter::convertHtmlToListOfWords($content, []);

        $this->assertEquals(['<p>', 'שלום', ' ', 'עולם', '</p>'], $output);
    }

}