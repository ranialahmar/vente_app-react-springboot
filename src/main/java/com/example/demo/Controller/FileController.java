package com.example.demo.Controller;


import com.example.demo.payload.UploadFileResponse;
import com.example.demo.repository.fileEntityRepository;
import com.example.demo.model.FileEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import javax.servlet.http.HttpServletRequest;
import javax.validation.constraints.NotNull;
import java.io.*;
import java.net.URI;
import java.util.*;
import java.util.stream.Collectors;


@RestController
@RequestMapping("/api/files")
@CrossOrigin(value = {"*"}, exposedHeaders = {"Content-Disposition"})

public class FileController {


  @Autowired
   private fileEntityRepository fileEntityRep;


private void saveFile(InputStream input, String path){
        try{
            OutputStream output= new FileOutputStream(new File(path));
            int read =0;
            byte[] bytes= new byte[1024];
            while ((read=input.read(bytes))!=-1) output.write(bytes, 0, read);
       output.flush();
            output.close();
        }catch(Exception e){e.printStackTrace();}
}



    @PostMapping(value = "/addfile")
    public UploadFileResponse  uploadNewFile(@NotNull @RequestParam("file") MultipartFile file ,String email  ) throws IOException {

        String fileName = file.getOriginalFilename();
        String path = "/home/rania/IdeaProjects/testreact/src/images/"+ fileName;
        saveFile(file.getInputStream(),path);
        String fileDownloadUri = ServletUriComponentsBuilder.fromCurrentContextPath()
                .path("/downloadFile/")
                .path(fileName)
                .toUriString();
        FileEntity fileEntity = new FileEntity(file.getOriginalFilename(),
                file.getContentType(),
                file.getBytes(),path,email
        );
        fileEntityRep.save(fileEntity);
        return  new UploadFileResponse(fileName, fileDownloadUri,
                file.getContentType(), file.getSize());


        //URI location = ServletUriComponentsBuilder.fromCurrentRequest().build().toUri();
        //return ResponseEntity.created(location).build();
    }






    }








