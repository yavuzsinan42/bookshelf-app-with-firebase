import {useState} from 'react';
import {auth} from '../Firebase/config';
import { useAuthContext } from './useAuthContext';

import { createUserWithEmailAndPassword } from 'firebase/auth';

export const useSignup=()=> {
    const [error,setError]=useState(null)
    const {dispatch}=useAuthContext();

    const signup=(email,password)=>{
        setError(null)

        createUserWithEmailAndPassword(auth,email,password)
        .then((res)=>{
            //console.log('kullanici oluştu',res.user);
            dispatch({type:'LOGIN',payload:res.user})
        })
        .catch((err)=>{
            console.log('hata',err);
            setError(err.message)
        })
    }
    return {error,signup}
}

