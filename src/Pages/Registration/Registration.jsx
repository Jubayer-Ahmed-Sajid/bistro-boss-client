import { useContext } from "react";
import { useForm } from "react-hook-form"
import { AuthContext } from "../../Providers/AuthProviders/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Components/hooks/useAxiosPublic";
import SocialLogin from "./SocialLogin";
import auth from '../../assets/others/authentication1.png'


const Registration = () => {
    const { createUser, userUpdateProfile } = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onsubmit = (data) => {
        console.log(data)
        createUser(data.name, data.email, data.password)
            .then((result) => {
                console.log(result)
                userUpdateProfile(data.name, data.photo)
                    .then(() => {
                        const userInfo = {
                            name: data.name,
                            email: data.email
                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    Swal.fire({
                                        position: "top-end",
                                        icon: "success",
                                        title: "Your work has been saved",
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                }
                            })

                        console.log('profile updated')
                    })
                    .catch(err => {
                        console.log(err.message)
                    })
            })
            .catch(error => {
                console.log(error.message)
            })


    }
    return (
        <div className="hero  min-h-screen bg-base-200 ">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center w-1/2 lg:text-left">
                   <img src={auth} alt="" />
                </div>
                <div className="card  w-1/2 max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onsubmit)} className="card-body ">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input {...register("name", { required: true })} type="text" placeholder="Enter your name" className="input input-bordered" required />
                            {errors.name && <p className='text-red-500'>Name is required.</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input {...register("photo", { required: true })} type="url" placeholder="Enter your name" className="input input-bordered" required />
                            {errors.photo && <p className='text-red-500'>Name is required.</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input {...register("email", { required: true })} type="email" placeholder="email" className="input input-bordered" required />
                            {errors.email && <p className='text-red-500'>Email is required.</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input {...register("password", { required: true, minLength: 6, maxLength: 20, pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\-]).{8,20}$/ })} type="password" placeholder="password" className="input input-bordered" required />
                            {errors.password && errors.password.type === 'required' && (<p className="text-red-500">Password is needed</p>)}
                            {errors.password && errors.password.type === 'minLength' && (<p className="text-red-500">Password length must be at least 6.</p>)}
                            {errors.password && errors.password.type === 'maxLength' && (<p className="text-red-500">Password length must be at least 20 highest.</p>)}
                            {errors.password && errors.password.type === 'pattern' && (<p className="text-red-500">Password must have a one uppercase letter one lowercase letter and one special symbol.</p>)}
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>

                        <div className="form-control  mt-6">
                            <input type="submit" value="Register Now" className="btn btn-primary"></input>
                        </div>
                        <div className="flex w-full mt-4">
                            <div className="grid h-[1px]  flex-grow card bg-base-300 rounded-box place-items-center"></div>
                            <div className="-mt-3 px-2 text-sm mb-4">OR</div>
                            <div className="grid h-[1px] flex-grow card bg-base-300 rounded-box place-items-center"></div>
                        </div>
                        <SocialLogin></SocialLogin>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Registration;