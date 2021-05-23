package com.project.tripplanner.backend.service;

import com.project.tripplanner.backend.model.PlaceToVisit;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;

@Service
public class LocationService {

//    public static void uploadImage(PlaceToVisit placeToVisit,String imageName){
//        File file = new File("src/main/resources/images/" + imageName);
//        byte[] bFile = new byte[(int) file.length()];
//        try{
//            FileInputStream fileInputStream = new FileInputStream(file);
//            fileInputStream.read(bFile);
//            fileInputStream.close();
//            System.out.println(bFile);
//        }catch (Exception e){
//            e.printStackTrace();
//        }
//
//        placeToVisit.setImage(bFile);
//    }
//
//    public static void getImage(PlaceToVisit placeToVisit){
//        try{
//            FileOutputStream fileOutputStream =
//                    new FileOutputStream("src/main/resources/images/"+"output.jpg");
//            fileOutputStream.write(placeToVisit.getImage());
//            fileOutputStream.close();
//        }catch (Exception e){
//            e.printStackTrace();
//        }
//
//    }

}
