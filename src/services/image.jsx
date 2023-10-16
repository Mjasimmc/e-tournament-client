import { ref, uploadBytes, uploadString } from "firebase/storage";
import { ApiCall } from "../ApiCall";
import { storage } from "../firebase/config";

export const uploadImage = async (image) => {
    try {
        console.log("asdfasfd")
        if(!image) throw 'not found'
        // const config = {
        //     headers:{
        //         Accept:"application/json",
        //         "Content-Type":"application/json"
        //     }
        // }
        

        const res = await ApiCall.post('/upload',{image});

        const data = res.data;
        // Do something with the response data if needed
        // console.log(data);
        // const storageRef =  ref(storage, 'mountains.jpg')
        // const res =  await uploadBytes(storageRef, image).then((snapshot) => {
        //     console.log('Uploaded a blob or file!');
        //   });
        return res
    } catch (error) {
        console.log(error)
        throw error
    }
}