package com.example.demo.repository;



import com.example.demo.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface
UsersRepository extends JpaRepository<Users, Integer> {

    Users findByUsername(String username);
    Users findUsersByEmail(String email);
    Users  findUsersById(int id);


}

