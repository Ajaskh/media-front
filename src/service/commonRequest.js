import axios from "axios";

// define a function to set common api call using axios


 export const commonRequest= async(method,url,body)=>{

    let requestConfig={
        method,
        url,
        data:body,
        headers:{
            "content-type":"application/json"
        }
    }

    // api call using axios

   return await axios(requestConfig).then((response)=>{
        return response
    }).catch((err)=>{
        return err
    })
}
