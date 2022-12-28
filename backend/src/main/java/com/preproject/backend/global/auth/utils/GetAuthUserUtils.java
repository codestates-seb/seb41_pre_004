package com.preproject.backend.global.auth.utils;

import com.preproject.backend.global.exception.BusinessLogicException;
import com.preproject.backend.global.exception.ExceptionCode;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

public class GetAuthUserUtils {
    public static Authentication getAuthUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        if (authentication.getName() == null || authentication.getName().equals("anonymousUser")){
            throw new BusinessLogicException(ExceptionCode.UNAUTHORIZED_MEMBER);
        }
        authentication.getPrincipal();
        return authentication;
    }
}
