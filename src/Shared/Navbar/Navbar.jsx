import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleSignOut = () =>{
        logOut()
        .then(res => console.log(res))
        .catch(error => console.error(error))
    }
    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/order'>Order</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/register'>Register</NavLink></li>
    </>
    console.log(user);
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl invisible md:visible">Social Event</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            {
                user ?
                    <div className="navbar-end gap-2">
                        <h3>{user.displayName || user.email}</h3>
                        <img className="rounded-full w-10" src={user.photoURL} alt="" />
                        <button onClick={handleSignOut} className="btn">Sign Out</button>
                    </div>
                    :
                    <div className="navbar-end">
                        <Link to='/login'><a className="btn">Login</a></Link>
                    </div>
            }

        </div>
    );
};

export default Navbar;