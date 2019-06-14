package com.example.demo.Controller;


import com.example.demo.model.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.demo.repository.UsersRepository;

import java.util.List;

@RestController
@RequestMapping(value="/rest/users")
public class UserController {

    @Autowired
    private UsersRepository usersRepository;

    @GetMapping(value ="/email/{email}/password/{password}")
    @ResponseBody
    public ResponseEntity<Object> getUser(@PathVariable String email,@PathVariable String password) {
        Users userL =usersRepository.findUsersByEmail(email);
        if(userL!= null)
        {
        return ResponseEntity.ok()
                .body(new Users(email, password));}
        else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("File was not fount");
        }


    }
    @GetMapping(value ="/allUs")
    public List<Users> getAllUs()
    {
        return usersRepository.findAll();
    }
    @GetMapping(value ="/all")
    public List<Users> getAll()
    {
        return usersRepository.findAll();
    }

    @PostMapping(value="/add")
    public String AddUsers(@RequestBody final Users users){
        usersRepository.save(users);
        return "user added successfully ";


    }

    @DeleteMapping("/user/delete/{email}")
    public String delete(@PathVariable String email ){
        Users prod = usersRepository.findUsersByEmail(email);
        usersRepository.delete(prod);
        return "deleted";

    }
}
