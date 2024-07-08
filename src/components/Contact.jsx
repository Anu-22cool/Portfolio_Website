import React from 'react';
import axios from "axios";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    try {
      await axios.post("https://getform.io/f/zazkowpb", userInfo);
      toast.success("Your message has been sent", {
        style: {
          fontSize: '20px', // Increase font size
          padding: '16px',  // Increase padding
        },
      });
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong", {
        style: {
          fontSize: '20px', // Increase font size
          padding: '16px',  // Increase padding
        },
      });
    }
  };

  return (
    <div name="Contact" className="text-white accordion-container" style={{ maxWidth: '1300px', margin: '0 auto', marginTop: '20px' }}>
      <Toaster 
        position="bottom-right" // Fix the position to bottom right
        toastOptions={{
          duration: 5000, // Optional: duration the toast is shown
        }}
      />
      <h1 className='underline text-5xl font-bold mb-4'>Contact me</h1>
      <span className='text-2xl font-bold mb-4'>Please fill out the form below to contact me</span>
      <div className='flex flex-col items-center justify-center mt-5'>
      <form onSubmit={handleSubmit(onSubmit)} className='bg-slate-200 px-8 py-6 rounded-xl w-full max-w-lg'>
      <h1 className='text-2xl font-bold mb-4 text-black'>Send Your Message</h1>
   <div className='flex flex-col mb-4'>
      <label className="block text-gray-700 text-xl">Full Name</label>
      <input
         {...register("name", { required: true })}
         className='shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
         type="text"
         placeholder='Enter Your Fullname'
      />
      {errors.name && <span className="text-red-500">Name is required</span>}
   </div>

   <div className='flex flex-col mb-4'>
      <label className="block text-gray-700 text-xl">Email Address</label>
      <input
         {...register("email", {
            required: true,
            pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
         })}
         className='shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
         type="text"
         placeholder='Enter Your Email Address'
      />
      {errors.email && <span className="text-red-500">Valid email is required</span>}
   </div>

   <div className='flex flex-col mb-4'>
      <label className="block text-gray-700 text-xl">Message</label>
      <textarea
         {...register("message", { required: true })}
         className='shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-40'
         placeholder='Enter Your Query'
      ></textarea>
      {errors.message && <span className="text-red-500 text-lg">Message is required</span>}
   </div>

   <div>
      <button type="submit" className='text-lg bg-black text-white rounded-xl px-4 py-3 hover:bg-slate-700 duration-300'>
         Send
      </button>
   </div>
</form>

      </div>
    </div>
  );
}

export default Contact;
