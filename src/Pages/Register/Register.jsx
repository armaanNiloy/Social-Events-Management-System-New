import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";


const Register = () => {
    const { createUser } = useContext(AuthContext);
    const [registerError, setRegisterError] = useState('');
    const navigate = useNavigate();
    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);

        if (password.length < 6) {
            setRegisterError('Password should be at least 6 characters or longer');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError('Your password should have at least one upper case characters.')
            return;
        }
        else if (!/.*[!@#$%^&*]/.test(password)) {
            setRegisterError('Your password should have at least one special characters.')
            return;
        }


        createUser(email, password)
            .then(result => {
                console.log(result.user);
                navigate('/');
            })
            .catch(error => console.error(error))
        console.log(name, email, password);
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Your name" name="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                            <label className="label">
                                <p>Already have an account?<Link className="label-text-alt link link-hover text-base text-blue-600" to='/login'>Please Login</Link></p>
                            </label>
                        </div>
                        {
                            registerError && <p className="text-red-700">{registerError}</p>
                        }
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Register;