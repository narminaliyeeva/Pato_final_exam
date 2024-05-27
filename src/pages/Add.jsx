
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form"



export default function Add() {

  const [image, setimage] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()


  const onSubmit = (data) => {
    axios.post('http://localhost:3000/data/', { ...data, file: image })
    .then(res=>console.log(res.data))
  }

  const convertToBase64 =(file)=>{
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setimage(reader.result)
    }
   }


  return (
    <>
 
    <form onSubmit={handleSubmit(onSubmit)}>
    
    <input type="file" onInput ={(e)=>convertToBase64(e.target.files[0])} />
    {image && <img src={image}/>}
    
      <input  {...register("name")} />
      {errors.name && <span>This field is required</span>}
      <input {...register("content", { required: true })} />
      {errors.content && <span>This field is required</span>}


      <input type="submit" className="btn1" value="submit" />
    </form>
    </>
  )
}