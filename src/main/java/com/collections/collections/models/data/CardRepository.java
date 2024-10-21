package com.collections.collections.models.data;

import com.collections.collections.models.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.collections.collections.models.Card;

import java.util.List;

@Repository
public interface CardRepository extends CrudRepository<Card, Integer>{

}
