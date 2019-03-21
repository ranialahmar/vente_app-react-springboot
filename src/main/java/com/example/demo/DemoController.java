package com.example.demo;


import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DemoController {
    @RequestMapping(value = "/echo")
    public String echo(@RequestParam(value = "request", defaultValue = "helloooo") String request) {
        return request;
    }
}