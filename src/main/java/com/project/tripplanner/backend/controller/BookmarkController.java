package com.project.tripplanner.backend.controller;

import com.project.tripplanner.backend.model.Bookmark;
import com.project.tripplanner.backend.model.User;
import com.project.tripplanner.backend.repository.BookmarkRepository;
import com.project.tripplanner.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.swing.text.html.Option;
import javax.transaction.Transactional;
import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/api")
public class BookmarkController {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BookmarkRepository bookmarkRepository;

    @PostMapping("*/places_to_visit/{userId}/addBookmark")
    public ResponseEntity<Boolean> addBookmark(@PathVariable Long userId,
                                               @Valid @RequestBody Bookmark bookmark) {
        Optional<User> user = userRepository.findById(userId);
        if (user.isPresent()) {
            bookmark.setUser(user.get());
            bookmarkRepository.save(bookmark);
        }
        return new ResponseEntity<>(true, HttpStatus.OK);
    }

    @PostMapping("*/places_to_stay/{userId}/addBookmark")
    public ResponseEntity<Boolean> addBookmarkStay(@PathVariable Long userId,
                                               @Valid @RequestBody Bookmark bookmark) {
        Optional<User> user = userRepository.findById(userId);
        if (user.isPresent()) {
            bookmark.setUser(user.get());
            bookmarkRepository.save(bookmark);
        }
        return new ResponseEntity<>(true, HttpStatus.OK);
    }

    @PostMapping("*/places_to_eat/{userId}/addBookmark")
    public ResponseEntity<Boolean> addBookmarkEat(@PathVariable Long userId,
                                               @Valid @RequestBody Bookmark bookmark) {
        Optional<User> user = userRepository.findById(userId);
        if (user.isPresent()) {
            bookmark.setUser(user.get());
            bookmarkRepository.save(bookmark);
        }
        return new ResponseEntity<>(true, HttpStatus.OK);
    }



    @Transactional
    @GetMapping("/{userId}/getInspired")
    public List<Bookmark> getOtherUsersBookmarks(@PathVariable long userId){
        return bookmarkRepository.getAllBookmarks(userId);
    }

    @Transactional
    @GetMapping("/{userId}/getUserBookmarks")
    public List<Bookmark> getUserBookmarks(@PathVariable long userId){
        return bookmarkRepository.findByUserId(userId);
    }



//        return userRepository.findById(userId).map(user -> {
//            bookmark.setUser(user);
//            return bookmarkRepository.save(bookmark);
//        }).orElse(() -> new Exception("dsaasds"));
//        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
//        Object obj = auth.getDetails();
//        System.out.println(obj);


}
