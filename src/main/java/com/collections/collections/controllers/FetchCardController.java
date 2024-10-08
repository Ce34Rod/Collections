package com.collections.collections.controllers;

import com.collections.collections.models.Card;
import com.collections.collections.models.data.CardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/cards")
public class FetchCardController {

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

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/private-collection")
    public ResponseEntity<Iterable<Card>> getPrivateCollection(){
        Iterable<Card> cards = cardRepository.findAll();
        return ResponseEntity.ok(cards);

    }

}