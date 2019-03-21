package com.example.demo.model;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;
import java.util.Set;

@Entity
@Data
@Getter
@Setter
public class Users  {

    @Id
    @GeneratedValue
    private int id;
    private String email;
    private  String password ;
    private String username ;
    @OneToMany(cascade=CascadeType.ALL,fetch = FetchType.EAGER)
    @JoinTable(name="user_role",
            joinColumns={@JoinColumn(name="USER_ID", referencedColumnName="id")},
            inverseJoinColumns={@JoinColumn(name="ROLE_ID", referencedColumnName="role_id")})
    private Set<Roles> roles;
    @OneToMany(cascade = CascadeType.ALL,fetch = FetchType.EAGER)
    @JoinTable(name = "User_Products", joinColumns = {@JoinColumn(name = "id",referencedColumnName="id")}, inverseJoinColumns = {@JoinColumn(name = "prod_id", referencedColumnName = "prod_id")})
    private Set<Products> Product;


    private Users(){}

    public Integer getId()
    {
        return id;
    }
    public void setId(Integer id)
    {
        this.id = id;
    }
    public String getName()
    {
        return username;
    }
    public void setName(String name)
    {
        this.username = name;
    }
    public String getEmail()
    {
        return email;
    }
    public void setEmail(String email)
    {
        this.email = email;
    }
    public String getPassword()
    {
        return password;
    }
    public void setPassword(String password)
    {
        this.password = password;
    }



}
