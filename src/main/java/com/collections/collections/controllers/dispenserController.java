package com.collections.collections.controllers;

import com.collections.collections.models.Card;
import com.collections.collections.models.data.CardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping("/")
public class dispenserController {

    @Autowired
    private CardRepository cardRepository;

    @GetMapping("/{id}")
    public ResponseEntity<Card> getCardById(@PathVariable int id) {
        Optional<Card> optCard = cardRepository.findById(id);
        if (optCard.isPresent()) {
            Card card = (Card) optCard.get();
            return ResponseEntity.ok(card);

        } else {
            return ResponseEntity.notFound().build();
        }

    }

}