import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import SocialLogin from '../SocialLogin/SocialLogin';
import Swal from 'sweetalert2';


const Registration = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const {createUser}= useContext(AuthContext)
    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email=(form.get("email")); 
        const password=(form.get("password")); 
        console.log(email,password)
        if (!/(?=.*[A-Z])/.test(password)) {
            setError('Please enter at least one uppercase');
            setSuccess('')
            return;
        } else if (!/(?=.*[!@#$&*])/.test(password)) {
            setError('Please enter at least one special character');
            setSuccess('')
            return;
        } else if (!/(?=.*[0-9])/.test(password)) {
            setError('Please enter at least one number');
            setSuccess('')
            return;
        } else if (!/.{6}/.test(password)) {
            setError('Please enter minimum 6 character');
            setSuccess('')
            return;
        }
        createUser(email,password)
        .then(result => {
            // Signed up 

            const loggedUser = result.user;
            console.log(loggedUser);
            setError('')
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Successfully register !',
                showConfirmButton: false,
                timer: 1500
              })
            // form.reset()
            // ...
          })
          .catch((error) => {
            console.error(error);
            setError(error.message)
            setSuccess('')
          });
      }
    return (
        <div>
            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                  
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Create an account
                            </h1>
                            <form onSubmit={handleRegister} className="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                </div>
                                <div className="flex items-start">
                                    <input type="checkbox" name="terms" id="terms" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required />
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                                    </div>
                                </div>
                                <button type="submit" className="w-full bg-cyan-600 p-2 rounded-md">Create an account</button>
                               <Link to={`/login`}>
                               <p className="text-sm font-light text-black">
                                    Already have an account? <a href="#" className="font-medium  text-pink-800 hover:underline dark:text-primary-500">Login here</a>
                                </p>
                               </Link>
                            </form>
                            <SocialLogin/>
                        </div>
                        <label className="label">
                            <p className="label-text-alt text-red-600">{error}</p>
                            <p className="label-text-alt text-green-600">{success}</p>
                        </label>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Registration;
