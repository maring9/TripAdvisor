package com.project.tripplanner.backend.service;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.cloud.firestore.Firestore;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import com.google.firebase.cloud.FirestoreClient;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;

@Service
public class FirebaseInitializer {


    @PostConstruct
    public void initialize(){

        FileInputStream serviceAccount =
                null;
        try {
            serviceAccount = new FileInputStream("D://downloads/trip-planner-33aa0-firebase-adminsdk-idsye-7554ad7ff0.json");
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }

        FirebaseOptions options = null;
        try {
            options = new FirebaseOptions.Builder()
                    .setCredentials(GoogleCredentials.fromStream(serviceAccount))
                    .build();
        } catch (IOException e) {
            e.printStackTrace();
        }

        FirebaseApp.initializeApp(options);

    }

    public Firestore getFirebaseInstance(){
        return FirestoreClient.getFirestore();
    }
}
