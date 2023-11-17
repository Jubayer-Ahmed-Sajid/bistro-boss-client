import { useContext, useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Providers/AuthProviders/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import login from '../../assets/others/authentication1.png'
import { useForm } from "react-hook-form"

import './style.css'
import Swal from 'sweetalert2';
const Login = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname  || '/'
    const {
        register,
        handleSubmit,
    } = useForm()
    const { signIn } = useContext(AuthContext)
    const [disabled, setDisabled] = useState(true)
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleValidateCaptcha = (e) => {
        const user_captcha_value = e.target.value;
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false)
        }
        else {
            setDisabled(true)
        }

    }
    const onSubmit = (data) =>{ 
        signIn(data.email,data.password)
        .then((result)=>{
            console.log(result.user)
            Swal.fire({
                icon: "success",
                title: "Well Done",
                text: "Logged in successfully",
           
              });
            navigate(from, {replace: true})
        })
        .catch(error =>{
            console.log(error.message)
        })

        console.log(data)}
    return (
        <div className="login hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center w-1/2 lg:text-left">
                    <img src={login} alt="" />
                </div>
                <div className="card  w-1/2 max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input {...register("email")} type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input {...register("password")} type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">

                            <label className="label">
                                <span className="label-text">captcha</span>
                            </label>
                            <LoadCanvasTemplate />
                            <input type="text" onBlur={handleValidateCaptcha} name="captcha" placeholder="write the captcha" className="input input-bordered" required />
                            <button onClick={handleValidateCaptcha} className='btn btn-outline btn-xs mt-2'>Validate</button>

                        </div>
                        <div className="form-control mt-6">
                            <input disabled={disabled} type="submit" value="Login" className="btn btn-primary"></input>
                        </div>
                    </form>
                    <Link className='btn w-full' to='/register'>Register</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;