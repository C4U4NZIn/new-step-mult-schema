'use client';
import React, { createContext, useContext , useState } from "react";
import api from '../../new-step-mult-schema/services/api/__api';
import axios from 'axios';

type userType = {
    username:string;
    nickname:string;
    email:string;
    phone:string;
    password:string;
}
type jwtToken = {
    acess_token:string;
}
type dataLoginParams = {
    email:string;
    password:string;
}


export type userContextType = {
    user: userType;
    createUser: (user:userType) => void; 
    authUser:(token:jwtToken) => void;
}


const userContext = createContext({} as userContextType);
   

    //const signUpAuthVerification = (email:string , token:string) =>{}


 const UserProvider = ({children}:{children:React.ReactNode}) => {

    const [user , setUser] = useState<userType>(
        {
            username:'',
            nickname:'',
            email:'',
            phone:'',
            password:''
        }
    );

    const createUser = (data:userType) =>{
       try {
        if(data){
             
        setUser(data);
        
        api.post('/post',{

            username: data.username,
            nickname:data.nickname,
            email:data.email,
            phone:data.phone,
            password:data.password
    
            }).then((resolve)=>{
                console.log(resolve.data);
            }).catch(error=>{
                console.log(error);
            })
           
            console.log(data);
        }
       } catch (error) {

        if(axios.isAxiosError(error)){
            console.log(error.response?.data);
        }else{
            console.log(error);
        }
        
       }
    }

    const authUser = (token:jwtToken) =>{
         return token;
    }
    const userLogin = async (data:dataLoginParams) =>{

      if(data){

       try {

        const userLogin = await api.post('/login',{
            email:data.email,
            password:data.password
        });
           
        
       } catch (error) {
        
       }

     
    }



    }



  return (
      <userContext.Provider value={{ user , createUser , authUser}}>
        {children}
      </userContext.Provider>
  ) 

}

export const useUserContext = () =>{
    
    const context = useContext(userContext);

    if(!context){
    throw new Error('Something went wrong! Try make sure you are setting the correct values');
    }
    return context;

}

export {UserProvider , userContext};

