package com.collections.collections.models.data;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.collections.collections.models.Card;
@Repository
public interface CardRepository extends CrudRepository<Card, Integer>{
}
