import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {

  const {signin}=useContext(AuthContext);
  const locatio=useLocation();
  const navigate=useNavigate()


  const handleLogin = e => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email=(form.get("email")); 
    const password=(form.get("password"));
    console.log(email,password) ;
    signin(email,password)
    .then((result) => {
       
      console.log = result.user;

      navigate(locatio?.state? locatio.state :"/")
      // ...
    })
    .catch((error) => {
      console.error(error)
    });
  }

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <h2 className="py-2 text-center text-2xl font-bold">Please Login</h2>
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <p >Don't have a account? <Link className="text-pink-700 font-bold" to={`/registration`}>Register</Link></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
