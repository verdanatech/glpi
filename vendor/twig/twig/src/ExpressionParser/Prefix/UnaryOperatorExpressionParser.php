<?php

/*
 * This file is part of Twig.
 *
 * (c) Fabien Potencier
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Twig\ExpressionParser\Prefix;

use Twig\ExpressionParser\AbstractExpressionParser;
use Twig\ExpressionParser\ExpressionParserDescriptionInterface;
use Twig\ExpressionParser\PrecedenceChange;
use Twig\ExpressionParser\PrefixExpressionParserInterface;
use Twig\Node\Expression\AbstractExpression;
use Twig\Node\Expression\Unary\AbstractUnary;
use Twig\Parser;
use Twig\Token;

/**
 * @internal
 */
final class UnaryOperatorExpressionParser extends AbstractExpressionParser implements PrefixExpressionParserInterface, ExpressionParserDescriptionInterface
{
    private string $nodeClass;
    private string $name;
    private int $precedence;
    private ?PrecedenceChange $precedenceChange;
    private ?string $description;
    private array $aliases;
    private ?int $operandPrecedence;

    public function __construct(
        /** @var class-string<AbstractUnary> */
        string $nodeClass,
        string $name,
        int $precedence,
        ?PrecedenceChange $precedenceChange = null,
        ?string $description = null,
        array $aliases = [],
        ?int $operandPrecedence = null
    ) {
        $this->nodeClass = $nodeClass;
        $this->name = $name;
        $this->precedence = $precedence;
        $this->precedenceChange = $precedenceChange;
        $this->description = $description;
        $this->aliases = $aliases;
        $this->operandPrecedence = $operandPrecedence;
    }

    /**
     * @return AbstractUnary
     */
    public function parse(Parser $parser, Token $token): AbstractExpression
    {
        $nodeClass = $this->nodeClass;
        return new $nodeClass($parser->parseExpression($this->operandPrecedence ?? $this->precedence), $token->getLine());
    }

    public function getName(): string
    {
        return $this->name;
    }

    public function getDescription(): string
    {
        return $this->description ?? '';
    }

    public function getPrecedence(): int
    {
        return $this->precedence;
    }

    public function getPrecedenceChange(): ?PrecedenceChange
    {
        return $this->precedenceChange;
    }

    public function getAliases(): array
    {
        return $this->aliases;
    }
}
