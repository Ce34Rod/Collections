package com.collections.collections.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/")
public class dispenserController {

    @GetMapping("/")
    public String getDispenserPage() {
        return "dispenser.html";
    }

}
