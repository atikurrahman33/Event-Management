import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div  className="flex justify-between py-6 items-center">
            <div className="flex gap-5 ">
                <div ><img className="rounded-full h-12" src="https://i.ibb.co/hZYV8kT/event107.jpg" alt="" /></div>
            <div className="text-rose-800 font-extrabold text-2xl">Event Management</div>
            </div>
            <div>
               <ul className="flex gap-5">
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
                            isPending ? "pending" : isActive ? "text-pink-700 font-bold underline": ""
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
            <div className="flex gap-3">
                <h1>Register</h1>
                <h1>Login</h1>
            </div>

        </div>
    );
};

export default Navbar;