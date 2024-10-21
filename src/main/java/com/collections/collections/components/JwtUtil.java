package com.collections.collections.components;

//import io.jsonwebtoken.Jwts;
//import io.jsonwebtoken.SignatureAlgorithm;
//import org.springframework.stereotype.Component;
//
//import java.util.Date;
//
//@Component
//public class JwtUtil {
//    private String secretKey = "your_secret_key";
//
//    public String generateToken(String id) {
//        return Jwts.builder()
//                .setSubject(id)
//                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60 * 10)) // 10 hours
//                .signWith(SignatureAlgorithm.HS256, secretKey)
//                .compact();
//    }
//
//    public String extractId(String token) {
//        return Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token).getBody().getSubject();
//    }
//
//    public boolean validateToken(String token, String id) {
//        final String extractedId = extractId(token);
//        return (extractedId.equals(id) && !isTokenExpired(token));
//    }
//
//    private boolean isTokenExpired(String token) {
//        return Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token).getBody().getExpiration().before(new Date());
//    }
//}

