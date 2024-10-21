package com.collections.collections;

import com.collections.collections.models.Card;
import com.collections.collections.models.data.CardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DevelopmentBucket {

//    @Autowired
//    private CardRepository cardRepository;

    public void runDevelopmentBucket() {
        Card card = new Card("BUD LIGHT can", "https://i.pinimg.com/736x/c3/9d/b6/c39db6c2c8cb45776ae98142afa59dae.jpg", "It aint warm but it sure as hell aint cold");
//        saveCard(card);
    }

//    public void saveCard(Card card) {
//        cardRepository.save(card);
//    }
}
