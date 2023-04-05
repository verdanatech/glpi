<?php

namespace atoum\atoum\tools\parameter;

class analyzer
{
    public function getTypeHintString(\reflectionParameter $parameter): string
    {
        if (!$parameter->hasType()) {
            return '';
        }

        $parameterType = $parameter->getType();

        if ($parameterType instanceof \reflectionNamedType && $parameterType->getName() === 'mixed') {
            // 'mixed' cannot be prefixed by nullable flag '?' and cannot be part of union types
            return 'mixed';
        }

        $parameterTypes = $parameterType instanceof \ReflectionUnionType
            ? $parameterType->getTypes()
            : [$parameterType];

        $names = [];
        foreach ($parameterTypes as $type) {
            $name = $type instanceof \reflectionNamedType ? $type->getName() : (string) $type;
            if ($name === 'self') {
                $name = $parameter->getDeclaringClass()->getName();
            }
            $names[] = ($type instanceof \reflectionType && !$type->isBuiltin() ? '\\' : '') . $name;
        }

        $prefix = $parameter->allowsNull() && !($parameterType instanceof \ReflectionUnionType) ? '?' : '';

        return $prefix . implode('|', $names);
    }
}
