import React from 'react'
import { Link, replace, useLocation, useNavigate } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form";   // react hook form
import Navbar from './Navbar';
import axios from "axios";
import toast from 'react-hot-toast';
const Signup = () => {
    const location=useLocation();
    const navigate=useNavigate();
    const from=location.state?.from?.pathname || "/"
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        const userInfo = {
            fullname: data.fullname,
            email: data.email,
            password: data.password
        }
        // to call api we use axios
        await axios.post("/user/signup", userInfo)
            .then((res) => {     // then is a promise
                console.log(data);
                if (res.data) {
                    // alert("Signup Successfully");
                    toast.success('Signup Successfully!');
                    navigate(from,{replace:true});
                }
                localStorage.setItem("User", JSON.stringify(res.data.user));
            }).catch((err) => {
                if (err.response) {
                    console.log(err)
                    // alert("Error: " + err.response.data.message);
                    toast.error("Error: " + err.response.data.message);
                }
            })
    }
    return (
        <div className='flex h-screen items-center justify-center dark:bg-slate-900 dark:text-white'>
            <Navbar />
            <div className='w-[600px] '>
                <div className="modal-box dark:bg-slate-900 dark:text-white dark:border ">
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>

                        <h3 className="font-bold text-lg mb-6">Signup</h3>
                        {/* fullname */}
                        <div className='mt-3 space-y-3'>
                            <span>Name</span> <br />
                            <input
                                type="text"
                                placeholder='Enter your fullname'
                                className='w-80 p-3 border rounded-md outline-none dark:text-black'
                                {...register("fullname", { required: true })}
                            />
                            <br />
                            {errors.fullname && <span className='text-sm text-red-500 py-4'>This field is required</span>}
                        </div>
                        {/* email */}
                        <div className='mt-3 space-y-3'>
                            <span>Email</span> <br />
                            <input
                                type="email"
                                placeholder='Enter your email'
                                className='w-80 p-3 border rounded-md outline-none dark:text-black'
                                {...register("email", { required: true })}
                            />
                            <br />
                            {errors.email && <span className='text-sm text-red-500 py-4'>This field is required</span>}
                        </div>
                        {/* password */}
                        <div className='mt-3 space-y-3'>
                            <span>Password</span> <br />
                            <input
                                type="text"
                                placeholder='Enter your password'
                                className='w-80 p-3 border rounded-md outline-none dark:text-black'
                                {...register("password", { required: true })}
                            />
                            <br />
                            {errors.password && <span className='text-sm text-red-500 py-4'>This field is required</span>}
                        </div>
                        {/* signup btn */}
                        <div className='flex justify-between mt-8'>
                            <button className='bg-[#FF00D3] text-white rounded-md px-4 py-3 hover:bg-pink-400 duration-200 cursor-pointer'>Signup</button>
                            <p className='text-[18px] py-3 cursor-pointer '>Have account ? {" "}
                                <button className='underline text-blue-500 cursor-pointer'
                                    onClick={() => document.getElementById("my_modal_3").showModal()}
                                >
                                    Login
                                </button>
                                <Login />
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup