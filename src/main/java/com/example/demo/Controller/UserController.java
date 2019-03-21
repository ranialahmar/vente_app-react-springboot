package com.example.demo.Controller;


import com.example.demo.model.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.demo.repository.UsersRepository;



@RestController
@RequestMapping(value="/rest/users")
public class UserController {

    @Autowired
    private UsersRepository usersRepository;

    @GetMapping(value ="/all")
    public String getAll(){
        return "imported "+usersRepository.findAll();
    }

    @PostMapping(value="/add")
    public String AddUsers(@RequestBody final Users users){
        usersRepository.save(users);
        return "user added successfully ";


    }

}
