package com.example.demo.repository;

import com.example.demo.model.Products;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface ProductsRepository extends JpaRepository<Products, Integer> {
    Products findProductsByIdp(int id);
   List <Products> findAllByEmail(String email);
   Products findProductsByTitle(String title);




}
