package com.preproject.backend.global.helper.email;

import org.springframework.mail.MailSendException;
import org.springframework.stereotype.Service;

@Service
public class EmailSender {
    private final EmailSendable emailSendable;

    public EmailSender(EmailSendable emailSendable) {
        this.emailSendable = emailSendable;
    }

    public void sendEmail(String message) throws MailSendException,
            InterruptedException {
        emailSendable.send(message);
    }
}
