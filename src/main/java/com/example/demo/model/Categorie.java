package com.example.demo.model;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
@Getter
@Setter
public class Categorie {
    @Id
    @GeneratedValue()
    private Integer id_cat;
    private String Categorie ;
   /* @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "categorie",referencedColumnName="Categorie")
    private List<Products> Product;*/
    public Categorie(){}
    public String getCategorie(){return Categorie;}

}
