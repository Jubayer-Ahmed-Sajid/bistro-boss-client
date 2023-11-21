import { useForm } from 'react-hook-form';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle'
import {FaUtensils} from 'react-icons/fa'
import useAxiosPublic from '../../../Components/hooks/useAxiosPublic'
import useAxiosSecure from '../../../Components/hooks/useAxiosSecure'
const image_hosting_key = import.meta.env.VITE_IMAGE_API_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const AddItems = () => {
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()
    const {
        register, handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = async(data) => {
        const imageFile ={image: data.image[0]}
       const res =await axiosPublic.post(image_hosting_api,imageFile,{
           headers:{ "content-type": "multipart/form-data",}
        })
        const itemToAdd = {
            name: data.name,
            recipe:data.recipe,
            image: res.data.data.display_url,
            price: parseFloat(data.price),
            category: data.category

        }
        const menuRes = await axiosSecure.post('/menu',itemToAdd)
        console.log(menuRes.data)
        

        }
    
    return (
        <div className='w-full'>
            <SectionTitle heading='Add new Item' subHeading="What's New?"></SectionTitle>
            <form onSubmit={handleSubmit(onSubmit)} className='md:ml-20 bg-base-300 px-12 space-y-4 py-8 '>
                <label className='label font-bold'>Recipe Name*</label>
                <input className='p-4 w-full rounded-lg' placeholder='Recipe Name' type="text" id="name" {...register('name', { required: true })} />
                {errors.name?.type === "required" && (
                    <p className='text-red-500' >Recipe name is required</p>
                )}
                <div className='flex gap-6'>
                    <div className='flex-1'>
                        <label className='label font-bold'>Category Name*</label>
                        <select defaultValue="default" className="select w-full max-w-xs" {...register('category', { required: true })}>
                            <option disabled value="default">Select Category</option>
                            <option value="salad">Salad</option>
                            <option value="pizza">Pizza</option>
                            <option value="drinks">Drinks</option>
                            <option value="desserts">Dessert</option>
                            <option value="soup">Soup</option>

                        </select>
                        {errors.category?.type === "required" && (
                            <p className='text-red-500' >Category name is required</p>
                        )}
                    </div>
                    <div className='flex-1'>

                        <label className='label font-bold'>Price*</label>
                        <input className='p-4 w-full rounded-lg' placeholder='Price' type="number" id="price" {...register('price', { required: true })} />
                        {errors.price?.type === "required" && (
                            <p className='text-red-500' >Price is required</p>
                        )}
                    </div>
                </div>
                <div>
                    <label className="label font-bold">Recipe Details*</label>
                    <textarea className="textarea textarea-bordered h-40 w-3/4" placeholder="Recipe" {...register('recipe', { required: true })}></textarea>
                    {errors.recipe?.type === "required" && (
                        <p className='text-red-500' >Recipe details is required</p>
                    )}
                </div>
                <div>
                <input type="file" className="file-input file-input-bordered w-full max-w-xs" {...register('image', {required: true})}/>
                    {errors.image?.type === "required" && (
                        <p className='text-red-500' >image is required</p>
                    )}
                </div>
                <button className='btn bg-orange-600 t text-white' type='submit'>Add new Item 
                <FaUtensils></FaUtensils> </button>

            </form>
        </div>


    );
};

export default AddItems;