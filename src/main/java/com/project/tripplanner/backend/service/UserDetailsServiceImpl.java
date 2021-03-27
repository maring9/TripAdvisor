package com.project.tripplanner.backend.service;

import com.project.tripplanner.backend.model.User;
import com.project.tripplanner.backend.model.UserPrincipal;
import com.project.tripplanner.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {
        Optional<User> user = userRepository.findByUsername(s);

        user.orElseThrow(()-> new UsernameNotFoundException("Not found " + s));

        return user.map(UserPrincipal::new).get();
    }
}
