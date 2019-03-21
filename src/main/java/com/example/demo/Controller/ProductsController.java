package com.example.demo.Controller;

import com.example.demo.model.Products;
import com.example.demo.repository.ProductsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value="/rest/products")

public class ProductsController {

    @Autowired
    private ProductsRepository productsRepository;

    @GetMapping(value = "/allProd")
    public String getAll() {
        return "imported " + productsRepository.findAll();
    }

    @PostMapping(value = "/addProd")
    public String AddUsers(@RequestBody final Products product) {
        productsRepository.save(product);
        return "product added successfully ";

    }
}