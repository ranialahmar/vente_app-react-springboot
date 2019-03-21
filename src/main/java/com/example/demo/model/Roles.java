package com.example.demo.model;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;


@Getter
@Setter
@Entity
@Data
public class Roles {
    @Id
    @GeneratedValue()
    private Integer role_id;
    private String role;
    private Roles(){}

}
