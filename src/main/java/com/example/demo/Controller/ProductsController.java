package com.example.demo.Controller;
import com.example.demo.model.FileEntity;
import com.example.demo.model.Products;
import com.example.demo.model.Users;
import com.example.demo.repository.ProductsRepository;
import com.example.demo.repository.UsersRepository;
import com.example.demo.repository.fileEntityRepository;
import com.google.gson.JsonArray;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.configurationprocessor.json.JSONArray;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;

import javax.validation.Valid;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;


@RestController
@RequestMapping(value="/rest/products")

public class ProductsController {

    @Autowired
    private ProductsRepository productsRepository;



    @GetMapping(value = "/allProd")
    public List<Products> getAll() {
        return productsRepository.findAll();
    }


    @PostMapping(value = "/addProd")
    public String AddProds(@RequestBody final Products product) {

        productsRepository.save(product);
        return "product added successfully ";


    }

    @GetMapping(value = "/prod/{Prod_id}")
    @ResponseBody
    public ResponseEntity<Object> getProduct(@PathVariable int Prod_id) {
        Products ProdL = productsRepository.findProductsByIdp(Prod_id);
        if (ProdL != null) {
            return ResponseEntity.ok()
                    .body(ProdL);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("File was not fount");
        }

    }


    @GetMapping(value = "/id/{id}")
    @ResponseBody
    public ResponseEntity<Object> getProd(@PathVariable int id) {
        List<Products> produser = productsRepository.findAll();
        List<Products> p = produser.stream().filter(prod -> prod.getUser_id() == id).collect(Collectors.toList());


        return ResponseEntity.ok()
                .body(p);
    }

    @GetMapping(value = "/useremail/{useremail}")
    @ResponseBody
    public ResponseEntity<Object> getProd(@PathVariable String useremail) {
        //List<Products> produser =productsRepository.findAll();
        //List <Products> p=produser.stream().filter(prod->prod.getUser_email()==useremail).collect(Collectors.toList());

        List<Products> products = productsRepository.findAllByEmail(useremail);

        return ResponseEntity.ok()
                .body(products);
    }

    @GetMapping("/prodfile/{email}")
    public ResponseEntity<Object>getRandomFile(@PathVariable String email ) {

        List<Products> fileEntity = productsRepository.findAllByEmail(email);
       // List<String> Listpath = new ArrayList<>();

        /*for (Products  prod:
                fileEntity) {
                Listpath.add(prod.getFile_name());



        }*/

     
        return ResponseEntity.ok()
                .body(fileEntity);
    }


    @DeleteMapping("/prod/delete/{idp}")
    public String delete(@PathVariable int idp){
        Products prod = productsRepository.findProductsByIdp(idp);
        productsRepository.delete(prod);
        return "delted";

    }


    @PutMapping("/prod/update/{id}")
    public ResponseEntity<Products> update(@PathVariable int id ,@Valid @RequestBody Products prod){
        Products product = productsRepository.findProductsByIdp(id);
        product.setTitle(prod.getTitle());
        product.setColor(prod.getColor());
        product.setDescription(prod.getDescription());
        product.setEtat(prod.getEtat());
        product.setPrice(prod.getPrice());
productsRepository.save(product);
return ResponseEntity.ok(product);


    }
}




        

    