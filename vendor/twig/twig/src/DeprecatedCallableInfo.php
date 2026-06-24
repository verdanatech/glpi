<?php

/*
 * This file is part of Twig.
 *
 * (c) Fabien Potencier
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Twig;

/**
 * @author Fabien Potencier <fabien@symfony.com>
 */
final class DeprecatedCallableInfo
{
    private string $type;
    private string $name;

    private string $package;
    private string $version;
    private ?string $altName;
    private ?string $altPackage;
    private ?string $altVersion;

    public function __construct(
        string $package,
        string $version,
        ?string $altName = null,
        ?string $altPackage = null,
        ?string $altVersion = null
    ) {
        $this->package = $package;
        $this->version = $version;
        $this->altName = $altName;
        $this->altPackage = $altPackage;
        $this->altVersion = $altVersion;
    }

    public function setType(string $type): void
    {
        $this->type = $type;
    }

    public function setName(string $name): void
    {
        $this->name = $name;
    }

    public function triggerDeprecation(?string $file = null, ?int $line = null): void
    {
        $message = \sprintf('Twig %s "%s" is deprecated', ucfirst($this->type), $this->name);

        if ($this->altName) {
            $message .= \sprintf('; use "%s"', $this->altName);
            if ($this->altPackage) {
                $message .= \sprintf(' from the "%s" package', $this->altPackage);
            }
            if ($this->altVersion) {
                $message .= \sprintf(' (available since version %s)', $this->altVersion);
            }
            $message .= ' instead';
        }

        if ($file) {
            $message .= \sprintf(' in %s', $file);
            if ($line) {
                $message .= \sprintf(' at line %d', $line);
            }
        }

        $message .= '.';

        trigger_deprecation($this->package, $this->version, $message);
    }
}
