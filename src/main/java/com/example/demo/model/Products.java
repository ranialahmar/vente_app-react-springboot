package com.example.demo.model;


import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Data
@Getter
@Setter
public class Products {

    @Id
    @GeneratedValue
    private int Prod_id;
    private String designation ;
    private int size ;
    private Products(){}
}
