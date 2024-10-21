package com.collections.collections.models;

import com.collections.collections.models.data.UserRepository;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.*;

@Entity
public class User {


    @Id
    private int id;

    private String password;

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(
            name = "users_cards",
            joinColumns = @JoinColumn(name = "user_id"), // Specify user_id
            inverseJoinColumns = @JoinColumn(name = "card_id") // Specify card_id
    )
    private Set<Card> collection = new HashSet<>();



    public User(){};

    public void addCard(Card card) {
        this.collection.add(card);
        card.getOwners().add(this);  // Ensure the relationship is updated on the other side in memory
    }



    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
    public int getId() {return id;}

    public void setId(int id) {
        this.id = id;
    }

    public Set<Card> getCollection() {
        return collection;
    }

    public void setCollection(Set<Card> collection) {
        this.collection = collection;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        User user = (User) o;
        return id == user.id && Objects.equals(password, user.password);
    }

    @Override
    public int hashCode() {
        return Objects.hash(password, id);
    }
}
