package com.preproject.backend.global.helper.email;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class EmailConfiguration {
    @Bean
    public EmailSendable emailSendable() {
        return new MockEmailSendable();
    }
}
