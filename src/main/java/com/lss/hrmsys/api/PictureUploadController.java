package com.lss.hrmsys.api;

import com.lss.hrmsys.config.PictureUploadProperties;
import com.lss.hrmsys.entity.model.Employee;
import com.lss.hrmsys.service.EmployeeService;
import net.coobird.thumbnailator.Thumbnails;
import net.coobird.thumbnailator.geometry.Positions;
import org.apache.tomcat.util.http.fileupload.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.servlet.http.HttpServletResponse;
import java.io.*;
import java.net.URLConnection;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/avatar")
@SessionAttributes("picturePath")
public class PictureUploadController {
    private final Resource picturesDir;
    private final Resource anonymousPicture;
    private final ResourceLoader resourceLoader;
    private EmployeeService employeeService;

    @Autowired
    public PictureUploadController(PictureUploadProperties uploadProperties, ResourceLoader resourceLoader, EmployeeService employeeService) {
        this.picturesDir = uploadProperties.getUploadPath();
        this.anonymousPicture = uploadProperties.getAnonymousPicture();
        this.resourceLoader = resourceLoader;
        this.employeeService = employeeService;
    }

    @ModelAttribute("picturePath")
    public Resource picturePath() {
        return anonymousPicture;
    }

    @RequestMapping(value = "/upload/{file_id}", method = RequestMethod.POST)
    public String onUpload(@PathVariable String file_id, MultipartFile file, RedirectAttributes redirectAttrs, Model model) throws IOException {
        if (file==null || file.isEmpty() || !isImage(file)) {
            redirectAttrs.addFlashAttribute("error", "Incorrect file. Please upload a picture.");
            return "redirect:/upload";
        }

        Resource picturePath = copyFileToPictures(file, file_id);
        model.addAttribute("picturePath", picturePath);

        return picturePath.getFilename();
    }

    //显示图片的方法关键 匹配路径像 localhost:8080/b7c76eb3-5a67-4d41-ae5c-1642af3f8746.png
    @RequestMapping(value = "/{filename:.+}", method = RequestMethod.GET)
    public void getFile(@PathVariable String filename,
                        @RequestParam(defaultValue = "") String size,
                        @RequestParam(defaultValue = "") String sex,
                        HttpServletResponse response) {
        Path mPath = size.equals("")? Paths.get(picturesDir.getFilename(), filename) : Paths.get(picturesDir.getFilename(), size, filename);
        Path defaultPath;
        if(sex.equals("female")) {
            defaultPath = size.equals("") ? Paths.get(picturesDir.getFilename(), "woman.png") : Paths.get(picturesDir.getFilename(), size, "woman.png");
        }
        else{
            defaultPath = size.equals("") ? Paths.get(picturesDir.getFilename(), "man.png") : Paths.get(picturesDir.getFilename(), size, "man.png");
        }
        response.setHeader("Content-Type", URLConnection.guessContentTypeFromName(mPath.toString()));
        try {
            if(Files.exists(mPath)) {
                Files.copy(mPath, response.getOutputStream());
            }
            else{
                Files.copy(defaultPath, response.getOutputStream());
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private Resource copyFileToPictures(MultipartFile file, String file_id) throws IOException {
        String fileExtension = getFileExtension(file.getOriginalFilename());
        String filePrefix = new SimpleDateFormat("yyyyMMddHHmmssSSSS").format(new Date());
        File tempFile = File.createTempFile(filePrefix, fileExtension, picturesDir.getFile());
        try (InputStream in = file.getInputStream(); OutputStream out = new FileOutputStream(tempFile)) {
            IOUtils.copy(in, out);
        }
        //原路径
        Thumbnails.of(tempFile)
                .scale(1.0f)
                .outputFormat("JPEG")
                .toFile( Paths.get(picturesDir.getFile().toPath().toString(),file_id + ".jpg").toString());
        //512x512
        Thumbnails.of(tempFile)
                .width(550)
                .keepAspectRatio(true)
                .toFile( Paths.get(picturesDir.getFile().toPath().toString(),"512x512",file_id + ".jpg").toString());
        Thumbnails.of(Paths.get(picturesDir.getFile().toPath().toString(),"512x512",file_id + ".jpg").toString())
                .sourceRegion(Positions.TOP_CENTER, 550,550)
                .size(512,512)
                .toFile( Paths.get(picturesDir.getFile().toPath().toString(),"512x512",file_id + ".jpg").toString());

        //256x256
        Thumbnails.of(tempFile)
                .width(300)
                .keepAspectRatio(true)
                .toFile( Paths.get(picturesDir.getFile().toPath().toString(),"256x256",file_id + ".jpg").toString());
        Thumbnails.of(Paths.get(picturesDir.getFile().toPath().toString(),"256x256",file_id + ".jpg").toString())
                .sourceRegion(Positions.TOP_CENTER, 300,300)
                .size(256,256)
                .toFile( Paths.get(picturesDir.getFile().toPath().toString(),"256x256",file_id + ".jpg").toString());

        //128x128
        Thumbnails.of(tempFile)
                .width(200)
                .keepAspectRatio(true)
                .toFile( Paths.get(picturesDir.getFile().toPath().toString(),"128x128",file_id + ".jpg").toString());
        Thumbnails.of(Paths.get(picturesDir.getFile().toPath().toString(),"128x128",file_id + ".jpg").toString())
                .sourceRegion(Positions.TOP_CENTER, 200,200)
                .size(128,128)
                .toFile( Paths.get(picturesDir.getFile().toPath().toString(),"128x128",file_id + ".jpg").toString());

        //96x96
        Thumbnails.of(tempFile)
                .width(100)
                .keepAspectRatio(true)
                .toFile( Paths.get(picturesDir.getFile().toPath().toString(),"96x96",file_id + ".jpg").toString());
        Thumbnails.of(Paths.get(picturesDir.getFile().toPath().toString(),"96x96",file_id + ".jpg").toString())
                .sourceRegion(Positions.TOP_CENTER, 100,100)
                .size(96,96)
                .toFile( Paths.get(picturesDir.getFile().toPath().toString(),"96x96",file_id + ".jpg").toString());

        //Files.move(tempFile.toPath(), Paths.get(picturesDir.getFile().toPath().toString(),file_id + fileExtension),StandardCopyOption.REPLACE_EXISTING);
        return new FileSystemResource(tempFile);
    }

    private boolean isImage(MultipartFile file) {
        return file.getContentType().startsWith("image");
    }

    private static String getFileExtension(String name) {
        return name.substring(name.lastIndexOf("."));
    }
}