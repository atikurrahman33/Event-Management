import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut} from "firebase/auth";
import app from "../ath/Ath";

export const AuthContext=createContext(null);
const auth= getAuth(app);

const AuthProvider = ({children}) => {
    const[user, setuser]=useState(null);
    const[loading,setLoading]=useState(true)

    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signin=(email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const Logout = () =>{
        setLoading(true)
        return signOut(auth); 

    }

    useEffect(()=>{
       const UnSub= onAuthStateChanged(auth , currentUser =>{
            console.log("jdfjkguyfbfgedfh",currentUser);
            setuser(currentUser);
            setLoading(false)
        });
        return () =>{
            UnSub()
        }
    },[])

    const authInfo={
        user,
        loading,
        createUser,
        signin,
        Logout
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;