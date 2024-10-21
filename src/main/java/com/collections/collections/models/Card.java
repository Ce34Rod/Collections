package com.collections.collections.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;

import java.util.HashSet;
import java.util.Set;

@Entity
public class Card {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "card_seq")
    @SequenceGenerator(name = "card_seq", sequenceName = "card_sequence", allocationSize = 1)
    private int id;

    private String title;
    private String gifUrl;
    private String description;
    @ManyToMany(mappedBy = "collection")
    @JsonBackReference
    // If you want to prevent serialization issues, consider using @JsonBackReference
    private Set<User> owners = new HashSet<>();



    public  Card(){};
    public Card(String title, String gifUrl, String description){
        this.title = title;
        this.gifUrl = gifUrl;
        this.description = description;

    }


    public void addUser(User user) {
        this.owners.add(user);
        user.getCollection().add(this);  // Ensure the relationship is updated on the other side in memory
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

    public Set<User> getOwners() {
        return owners;
    }

    public void setOwners(Set<User> owners) {
        this.owners = owners;
    }
}
