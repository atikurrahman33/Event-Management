import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const SocialLogin = () => {
    const {googleLogIn} = useContext(AuthContext);
    const handleGoogle = () =>{
        googleLogIn()
        .then(result =>{
            const googleLoggedUser = result.user;
            console.log(googleLoggedUser);
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Successfully login',
                showConfirmButton: false,
                timer: 1500
              })
        })
        .catch(error =>{
            console.log(error.message);
            
        })
    }
    return (
        <Link onClick={handleGoogle} className="flex gap-4 items-center bg-[#f2f2f2] justify-center py-3">
            <h1 className="text-[18px]">Sign in with google</h1>
            <img  className="w-10" src="https://i.ibb.co/bb5hHDZ/google.png" alt="google-icon" />
        </Link>
    );
};

export default SocialLogin;