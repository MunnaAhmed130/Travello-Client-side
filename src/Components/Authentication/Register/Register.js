import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import useAuth from '../../../Hooks/useAuth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Logo = "https://i.ibb.co/C9ShxsJ/airplane.png";

const Register = () => {
    const { user, handleRegistration, error, loading } = useAuth();

    const [passwordShown, setPasswordShown] = useState(false);

    const history = useNavigate();

    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    }

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        if (data.password !== data.password2) {
            alert('your password did not match')
            return
        }
        handleRegistration(data.email, data.password)
        console.log(user)
    }
    // const notify = () => toast({ error });
    return (
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <img className="mx-auto h-12 w-auto" src={Logo} alt="Workflow" />
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Register
                    </h2>
                </div>
                <form className="mt-8 " onSubmit={handleSubmit(onSubmit)}>
                    <input type="hidden" name="remember" value="true" />
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="email-address" className="">Email address</label>
                            <input id="email-address" {...register("email", { required: true })} type="email" required className="appearance-none rounded  block w-full px-3 py-2 my-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" />
                        </div>
                        {/* autoComplete="email" */}
                        <div>
                            <label htmlFor="password" className="">Password</label>
                            <input id="password" {...register("password",
                                // { pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/ }
                            )}
                                type={passwordShown ? "text" : "password"} required className="appearance-none rounded block w-full px-3 py-2 my-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
                        </div>
                        {/* autoComplete="current-password" */}
                        <div>
                            <label htmlFor="password2" className="">Confirm Password</label>
                            <input id="password2" {...register("password2", {
                                // pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/
                            })} type={passwordShown ? "text" : "password"} autoComplete="current-password" required className="appearance-none rounded block w-full px-3 py-2 my-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
                        </div>
                    </div>
                    <div className='flex items-center pb-3'>
                        <input id="" name="" type="checkbox" onClick={togglePassword} className=" h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                        <label htmlFor="" className=' ml-1 text-gray-600 text-sm  font-medium'> Show Password</label>
                    </div>
                    <div className="flex items-center justify-between pb-2">
                        <div className="flex items-center">
                            {/* <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" /> */}
                            <Link to='/login'><label htmlFor="" className="ml-2 block text-sm  font-medium text-indigo-600 hover:text-indigo-500" >
                                Already have an account
                            </label></Link>
                        </div>

                        <div className=" flex items-center  ">
                            <Link to="">
                                <label htmlFor="" className=" mr-2 text-sm  font-medium text-indigo-600 hover:text-indigo-500 space-y-6" >
                                    Forgot your password?
                                </label>
                            </Link>
                        </div>
                    </div>
                    <p>{error}</p>
                    <div>
                        <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                {/* <!-- Heroicon name: solid/lock-closed --> */}
                                {/* <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                            </svg> */}
                                {/* <svg className="animate-spin h-5 w-5 mr-3 text-indigo-500 " viewBox="0 0 24 24">

                                </svg> */}
                            </span>
                            Register
                        </button>
                        {/* {error && <ToastContainer
                            position="top-right"
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                        />
                        <ToastContainer />} */}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;