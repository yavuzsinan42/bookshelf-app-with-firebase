import { auth } from "../Firebase/config";
import { signOut } from "firebase/auth";
import { useAuthContext } from './useAuthContext';


export const useLogout = () => {
    const {dispatch}=useAuthContext();
    const logout = () => {
        signOut(auth)
        .then(()=>{
            console.log('kullanıcı çıkış yaptı');
            dispatch({type:'LOGOUT'})
            })
            
    };
    return { logout };
    }

