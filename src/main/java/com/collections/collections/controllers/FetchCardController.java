package com.collections.collections.controllers;

import com.collections.collections.models.Card;
import com.collections.collections.models.User;
import com.collections.collections.models.data.CardRepository;
import com.collections.collections.models.data.UserRepository;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/api/cards")
public class FetchCardController {

    @Autowired
    private CardRepository cardRepository;

    @Autowired
    private UserRepository userRepository;

    public static String getUserFromCookies(Cookie[] cookies) {
        if (cookies != null) {
            for (Cookie cookie : cookies) {
                System.out.println(cookie.getValue());
                System.out.println(cookie.getName());
                System.out.println("Cookie Values");
                if ("userId".equals(cookie.getName())) {
                    System.out.println(cookie.getValue());
                    return cookie.getValue();
                }
            }
        }
        return null;
    }



    @GetMapping("/{id}")
    public ResponseEntity<Card> getCardById(@PathVariable Integer id, HttpServletRequest request) {
        // Retrieve the card by ID
        Optional<Card> optCard = cardRepository.findById(id);

        // Check if the card is present
        if (!optCard.isPresent()) {
            return ResponseEntity.notFound().build(); // Return 404 if the card is not found
        }

        Card card = optCard.get(); // Safe to call get() now

        // Get the user ID from cookies
        System.out.println(getUserFromCookies(request.getCookies()));
        System.out.println("result from get User from cookies");
        String userId = getUserFromCookies(request.getCookies());
        System.out.println(userId + "#");

        // Check if user ID is present
        if (userId != null) {
            try {
                Optional<User> optUser = userRepository.findById(Integer.parseInt(userId));
                if (optUser.isPresent()) {
                    User user = optUser.get();
                    Set<Card> userCollection = user.getCollection();
                    userCollection.add(card);
                    System.out.println(userCollection);
                    System.out.println("userCollection");
                    userRepository.save(user);
                }
            } catch (NumberFormatException e) {
                return ResponseEntity.badRequest().body(null); // Return 400 if the user ID is invalid
            }
        }

        // Return the card in the response
        return ResponseEntity.ok(card);
    }




    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/private-collection")
    public ResponseEntity<Iterable<Card>> getPrivateCollection(@RequestHeader("User-ID") String userId){

        System.out.println(userId + 'A');

        if (userId != null && !userId.trim().isEmpty()) {
            System.out.println(userId + 'B');

            try {
                int userIdInt = Integer.parseInt(userId);
                System.out.println(userIdInt);
                Optional<User> optUser = userRepository.findById(userIdInt);

                if (optUser.isPresent()) {
                    User user = optUser.get();
                    Set<Card> cards = user.getCollection();
                    System.out.println(user.getCollection());
                    return ResponseEntity.ok(cards);
                } else {
                    System.out.println("User not found");
                    return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ArrayList<>());
                }
            } catch (NumberFormatException e) {
                System.out.println("Invalid userId format: " + userId);
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ArrayList<>());
            }
        } else {
            System.out.println("userId is null or empty");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ArrayList<>());
        }


    }





}