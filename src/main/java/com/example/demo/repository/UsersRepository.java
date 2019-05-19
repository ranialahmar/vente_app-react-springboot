package com.example.demo.repository;



import com.example.demo.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;

public interface
UsersRepository extends JpaRepository<Users, Integer> {
    Users findByUsername(String username);
    Users findUsersByEmail(String email);
    Users  findUsersById(int id);


}

