package com.collections.collections.controllers;

//import com.collections.collections.components.JwtUtil;
import com.collections.collections.models.Card;
import com.collections.collections.models.User;
import com.collections.collections.models.data.UserRepository;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.*;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;


import static java.lang.System.out;

@RestController
@RequestMapping("/api")
public class AuthenticationController {

    @Autowired
    private UserRepository userRepository;

//    @Autowired
//    private JwtUtil jwtUtil;
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



    @PostMapping("/register")
    public ResponseEntity<String> createUser(@RequestBody @Valid User user, HttpServletResponse response) {
        Optional<User> existingUser = userRepository.findById(user.getId());

        if (existingUser.isPresent()) {
            return new ResponseEntity<>("A user with that id already exists", HttpStatus.CONFLICT);
        }
        Set<Card> cardIds = new HashSet<>();
        user.setCollection(cardIds);
        userRepository.save(user);
        Cookie userCookie = new Cookie("user", String.valueOf(user.getId()));
        userCookie.setPath("/"); // Set the path for which the cookie is valid
        userCookie.setMaxAge(60 * 60); // Set cookie to expire in 7 days
        userCookie.setHttpOnly(true); // Optional: Make the cookie HTTP only
        response.addCookie(userCookie);
//        session.setAttribute("currentUser", user);

        // Generate JWT token
//        String token = generateToken(user);

        // Return the JWT token in the response
        return ResponseEntity.status(HttpStatus.CREATED)
                .body("User registered successfully. Token: ");
//    }

//    private String generateToken(User user) {
//        // You can set an expiration time for the token
//        long expirationTime = 86400000; // 1 day in milliseconds
//
//        return Jwts.builder()
//                .setSubject(String.valueOf(user.getId()))
//                .setIssuedAt(new Date())
//                .setExpiration(new Date(System.currentTimeMillis() + expirationTime))
//                .signWith(SignatureAlgorithm.HS256, "your_secret_key") // Replace with your secret key
//                .compact();
    }


    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody @Valid User user, HttpServletResponse response) {
        Optional<User> optUser = userRepository.findById(user.getId());
        String password = user.getPassword();


        if (optUser.isPresent() ) {
            User theUser = (User) optUser.get();
            String correctPassword = theUser.getPassword();
            if (Objects.equals(user.getPassword(), correctPassword)) {
                Cookie userCookie = new Cookie("user", String.valueOf(theUser.getId()));
                userCookie.setPath("/"); // Set the path for which the cookie is valid
                userCookie.setMaxAge(60 * 60); // Set cookie to expire in 7 days
                userCookie.setHttpOnly(true); // Optional: Make the cookie HTTP only
                response.addCookie(userCookie);
            } else {
                return new ResponseEntity<>("bad credentials", HttpStatus.CONFLICT);
            }

        }
        return new ResponseEntity<>("Logged in successfully", HttpStatus.OK);
    }


    @PostMapping("/logout")
    public ResponseEntity<String> logout(HttpSession session) {
        session.invalidate();
        return new ResponseEntity<>("Logged out successfully", HttpStatus.OK);
    }
}
