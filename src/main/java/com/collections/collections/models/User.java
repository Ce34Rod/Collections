package com.collections.collections.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotNull;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.Objects;

@Entity
public class User {

    @NotNull
    private String userName;

    @NotNull
    private String pwHash;

    private static final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    public User(){}

    public User(String userName, String password) {
        this.userName = userName;
        this.pwHash = encoder.encode(password);
    }

    public boolean isMatchingPassword(String password) {return encoder.matches(password, pwHash);}
    public void setPassword(String password) {
        this.pwHash = encoder.encode(password);
    }


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    public int getId() {return id;}

    public void setId(int id) {
        this.id = id;
    }


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        User user = (User) o;
        return id == user.id && Objects.equals(userName, user.userName) && Objects.equals(pwHash, user.pwHash);
    }

    @Override
    public int hashCode() {return Objects.hash(id);}


}
