package com.example.demo.repository;

import com.example.demo.model.FileEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface fileEntityRepository  extends JpaRepository<FileEntity, Integer> {
    FileEntity findFileEntityById(int id);
    FileEntity findFileEntityByFileName(String file_name);

    List<FileEntity> findAllByEmail(String email);

}
