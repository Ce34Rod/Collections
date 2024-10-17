package com.collections.collections.controllers;

import com.collections.collections.models.User;
import com.collections.collections.models.data.UserRepository;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import java.util.Enumeration;

import static java.lang.System.out;

@Controller
public class AuthenticationController {

    @Autowired
    private UserRepository userRepository;


    private static final String userSessionKey = "user";

    private static void setUserInSession(HttpSession session, User user) {
        session.setAttribute(userSessionKey, user.getId());
        out.println(session.getId());
        Enumeration<String> keys = session.getAttributeNames();
        while (keys.hasMoreElements()) {
            String key = keys.nextElement();
            Object value = session.getAttribute(key);
            out.println(key + ": " + value + "<br>");
        }
        out.println(userSessionKey+user.getId());
    }
}
