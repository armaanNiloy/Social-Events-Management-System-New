import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {

    const { signIn, signInGoogle } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const notifya = () => toast.success('Successfully added', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);
        
        signIn(email, password)
            .then(result => {
                if(result.user.emailVerified){
                    notifya();
                }
                navigate(location?.state ? location.state : '/');
                
            })
            .catch(error => setLoginError(error.message))
    }
    const handleGoogleSignIn = () =>{
        signInGoogle()
        .then(result =>{
            console.log(result);
            navigate(location?.state ? location.state : '/')
        })
        .catch(error =>{
            setLoginError(error);
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left mb-5">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
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
                                <p>Do not have an account?<Link className="label-text-alt link link-hover text-base text-blue-600" to='/register'> Please Register</Link></p>
                            </label>
                        </div>
                        {
                            loginError && <p className="text-red-700">{loginError}</p>
                        }
                        <div className="form-control mt-6 gap-3">
                            <button className="btn btn-primary">Login</button>
                            <button onClick={handleGoogleSignIn} className="btn btn-accent">Login with Google</button>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    );
};

export default Login;