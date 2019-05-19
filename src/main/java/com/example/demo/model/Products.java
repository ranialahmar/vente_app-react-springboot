package com.example.demo.model;


import com.fasterxml.jackson.annotation.JsonIgnore;
import com.sun.org.glassfish.gmbal.NameValue;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;


@Entity
@Data
@Getter
@Setter
public class Products implements Serializable {

    @Id
    @GeneratedValue

    private int idp;
    private String title;
    private int size ;
    private float price ;
    private String etat;
    private String description;
    @Column(name = "user_id")
    private Integer user_id;
    @Column(name = "email")
    private String email;
    @Column(name = "categorie")
    private String categorie;
    private String color;
    @Column(name = "file_name")
    private String file_name;
    private String path;


    public Products(){}

    public void setId(Integer id)
    {
        this.user_id = id;
    }
    public void setTitle(String title){this.title=title;}
    public void setDescription(String description){this.description=description;}
    public void setEtat(String etat){this.etat=etat;}
    public void setPrice(float price){this.price=price;}
    public void setColor(String color){this.color=color;}








    public Integer getUser_id(){
        return user_id;
    }
    public String getUser_email(){
        return email;
    }
    public String getPath(){return path;}
    public int getIdp(){return idp;}

    public String getFile_name() {
        return file_name;
    }
    public String getTitle(){return  title;}
    public String getDescription(){return  description;}
    public String getCategorie(){return  categorie;}
    public String getEtat(){return  etat;}
    public String getColor(){return  color;}
    public int getSize(){return  size;}
    public float getPrice(){return  price;}

}
// @OneToOne(fetch=FetchType.EAGER)
// @JoinColumn(name="file_name",referencedColumnName = "fileName")
//private int user_id;
//@ManyToOne(fetch= FetchType.LAZY)
//@JoinColumn(name="user_id",referencedColumnName = "id")
//private Users user;
//private List<Users> users;