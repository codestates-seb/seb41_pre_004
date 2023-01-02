package com.preproject.backend.global.utils.validation;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

public class PlusMinusOneValidator implements ConstraintValidator<PlusMinusOne, Integer> {
    @Override
    public void initialize(PlusMinusOne constraintAnnotation) {
        ConstraintValidator.super.initialize(constraintAnnotation);
    }

    @Override
    public boolean isValid(Integer value, ConstraintValidatorContext context) {
        return value == 1 || value == -1;
    }
}
