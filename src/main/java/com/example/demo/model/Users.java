package com.example.demo.model;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;


import javax.persistence.*;
import javax.validation.constraints.Max;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Entity
@Data
@Getter
@Setter
public class Users implements Serializable {

    @Id
    @GeneratedValue
    private Integer id;
    private String email;
    private  String password ;
    private String username ;
    private String adresse;
    private Long tel;
    @OneToMany(cascade=CascadeType.ALL,fetch = FetchType.EAGER)
    @JoinTable(name="user_role",
            joinColumns={@JoinColumn(name="USER_ID", referencedColumnName="id")},
            inverseJoinColumns={@JoinColumn(name="ROLE_ID", referencedColumnName="role_id")})
    private Set<Roles> roles;
    @OneToMany(cascade = CascadeType.ALL,fetch = FetchType.EAGER)
    @JoinColumns({ @JoinColumn(name = "email",referencedColumnName="email"),@JoinColumn(name = "user_id",referencedColumnName="id")})
    private List<Products> Product;


    private Users(){}
    public  Users(String email, String password){
        this.email=email;
        this.password=password;

    }
    public  Users(String email, String password,String adresse,Long tel){
        this.email=email;
        this.password=password;
        this.adresse=adresse;
        this.tel=tel;
    }

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
