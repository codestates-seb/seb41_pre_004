package com.preproject.backend.global.auth.handler;

import com.google.gson.JsonObject;
import com.preproject.backend.global.auth.userdetails.MemberDetailsService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.nio.charset.StandardCharsets;

@Slf4j
public class MemberAuthenticationSuccessHandler implements AuthenticationSuccessHandler {


    MemberDetailsService memberDetailsService;




    @Override
    public void onAuthenticationSuccess(HttpServletRequest request,
                                        HttpServletResponse response,
                                        Authentication authentication) throws IOException {


        String username = authentication.getName();

        System.out.println("User " + username + " successfully authenticated");
        try(PrintWriter writer = response.getWriter()){
            JsonObject json = new JsonObject();
            json.addProperty("username", username);

            response.setStatus(HttpStatus.ACCEPTED.value());
            response.setContentType(MediaType.APPLICATION_JSON_VALUE);
            response.setCharacterEncoding(StandardCharsets.UTF_8.toString());

            writer.write(json.toString());
        }



        log.info("# Authenticated successfully!");
    }
}
