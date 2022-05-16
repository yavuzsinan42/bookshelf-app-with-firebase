import {useState} from 'react';
import {auth} from '../Firebase/config';
import { useAuthContext } from './useAuthContext';

import { signInWithEmailAndPassword } from 'firebase/auth';

export const useLogin=()=> {
    const [error,setError]=useState(null)
    const {dispatch}=useAuthContext();

    const login=(email,password)=>{
        setError(null)

        signInWithEmailAndPassword(auth,email,password)
        .then((res)=>{
            dispatch({type:'LOGIN',payload:res.user})
            //console.log('kullanici giriş yaptı',res.user);
        })
        .catch((err)=>{
            console.log('hata',err);
            setError(err.message)
        })
    }
    return {error,login}
}

