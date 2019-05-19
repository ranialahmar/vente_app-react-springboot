package com.example.demo.model;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;


@Entity
@Getter
@Setter
@Data
public class FileEntity  implements Serializable {
    @Id
    @GeneratedValue
    private Integer id;
    private String fileName;
    private String contentType;
    private String email;
    private String Filepath;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "file_name",referencedColumnName="fileName")
            private List<Products> Product;
    @Lob
    private byte[] data;


    public FileEntity(){}
    public FileEntity(String fileName,String contentType,byte[] data){
        this.fileName=fileName;
        this.contentType=contentType;
        this.data=data;
    }
    public FileEntity(String fileName,String contentType,byte[] data,String Filepath,String email){
        this.fileName=fileName;
        this.contentType=contentType;
        this.data=data;
        this.Filepath=Filepath;
        this.email=email;
    }
    public String getContentType(){
        return contentType;
    }
    public byte[] getData(){
        return data;
    }
    public String getFileName(){
        return fileName;
    }
    public String getFilepath(){return Filepath;}
    public String getEmail(){return email;}
}
