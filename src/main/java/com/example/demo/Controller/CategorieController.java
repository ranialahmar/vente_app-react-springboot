package com.example.demo.Controller;

import com.example.demo.model.Categorie;
import com.example.demo.repository.CategorieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

public class CategorieController {

    @Autowired
    private CategorieRepository categorieRepository;

    @GetMapping(value = "/allCat")
    public List<Categorie> getAll() {
        return categorieRepository.findAll();
    }


   /* @PostMapping(value = "/addCat")
    public  Categorie  AddProds(@RequestBody final Categorie categ) {
        Categorie cat = categorieRepository.findCategorieByCategorie(categ.getCategorie());
        if(cat!= null) {
            categorieRepository.save(categ);
            return  categ;
        }
        return  categ;
    }*/
}
