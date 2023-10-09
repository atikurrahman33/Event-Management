import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleSignOut = () => {
        logOut()
            .then(() => { })
            .catch(e => console.log(e.message))
    }
    return (
        <div className="flex justify-between py-6 items-center ">
            <div className="flex gap-5 ">
                <div ><img className="rounded-full h-12" src="https://i.ibb.co/FxTXbJT/istockphoto-1495088043-612x612.jpg" alt="" /></div>
                <div className="text-rose-800 font-extrabold text-2xl">Event Management</div>
            </div>
            <div >
                <ul className="flex gap-5 ">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-pink-700 font-bold underline" : ""
                            }
                        >
                            Home
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/About"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-pink-700 font-bold underline" : ""
                            }
                        >
                            About
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/Service"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-pink-700 font-bold underline" : ""
                            }
                        >
                            Services
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/Contact"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-pink-700 font-bold underline" : ""
                            }
                        >
                            Contact
                        </NavLink>
                    </li>
                </ul>

            </div>
            <div className="flex gap-3 items-center">
                {
                    user &&
                    <div>
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src={user?.photoURL} />
                        </div>
                    </label>
                </div>
                }

                {
                    user ?
                        <button onClick={handleSignOut} className="font-bold">Sign Out</button>
                        :
                        <NavLink
                            to="/login"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-pink-700 font-bold underline" : ""
                            }
                        >
                            Login
                        </NavLink>


                }
            </div>

        </div>
    );
};

export default Navbar;