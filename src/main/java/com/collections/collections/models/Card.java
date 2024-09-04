package com.collections.collections.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Card {

    @Id
    @GeneratedValue
    private int id;

    private String title;
    private String gifUrl;
    private String description;

    public  Card(){}
    public Card(String title, String gifUrl, String description){
        this.title = title;
        this.gifUrl = gifUrl;
        this.description = description;

    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getGifUrl() {
        return gifUrl;
    }

    public void setGifUrl(String gifUrl) {
        this.gifUrl = gifUrl;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
