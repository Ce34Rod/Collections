package com.collections.collections.controllers;

import com.collections.collections.models.Card;
import com.collections.collections.models.data.CardRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api")
public class CreateCardController {

    @Autowired
    private CardRepository cardRepository;

    @PostMapping("/createCard")
    public ResponseEntity<String> createCard(@RequestBody @Valid Card card) {
        cardRepository.save(card);
        return new ResponseEntity<>("Card created successfully", HttpStatus.CREATED);
    }
}

