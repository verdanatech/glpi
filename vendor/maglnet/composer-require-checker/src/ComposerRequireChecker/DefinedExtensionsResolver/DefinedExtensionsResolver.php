<?php

declare(strict_types=1);

namespace ComposerRequireChecker\DefinedExtensionsResolver;

use function array_merge;
use function file_get_contents;
use function json_decode;
use function strpos;
use function substr;

class DefinedExtensionsResolver
{
    /**
     * @param array<string> $phpCoreExtensions
     *
     * @return array<string>
     */
    public function __invoke(string $composerJson, array $phpCoreExtensions = []): array
    {
        /** @var array<string, string> $requires */
        $requires = json_decode(file_get_contents($composerJson), true)['require'] ?? [];

        $extensions           = [];
        $addPhpCoreExtensions = false;

        foreach ($requires as $require => $version) {
            if ($require === 'php' || $require === 'php-64bit') {
                $addPhpCoreExtensions = true;
                continue;
            }

            if (strpos($require, 'ext-') !== 0) {
                continue;
            }

            $extensions[] = substr($require, 4);
        }

        if ($addPhpCoreExtensions) {
            $extensions = array_merge($extensions, $phpCoreExtensions);
        }

        return $extensions;
    }
}
