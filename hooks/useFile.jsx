import React, { useEffect, useRef, useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL, deleteObject} from "firebase/storage";
import { storage } from "../infra/config";
import { faL } from "@fortawesome/free-solid-svg-icons";


export function useFile(){
    
    const [fileUrl, setFileUrl] = useState(false)
  
    const uploadFile = (file)=>{

      const storageRef = ref(storage, 'teste/'+file.name)
      const uploadTask = uploadBytesResumable(storageRef, file)
    
        uploadTask.on('state_changed', 
          (snapshot) => {
         
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

            switch (snapshot.state) {
              case 'paused':
                console.log('Upload is paused');
                break;
              case 'running':
                console.log('Upload is running');
                break;
            }
          }, 
          (error) => {
            console.log(error)
          }, 
           async () => {
            
            const UrlFile = await getDownloadURL(uploadTask.snapshot.ref)
            setFileUrl(UrlFile)
          }
        )
    }


    return([fileUrl, uploadFile])
}

