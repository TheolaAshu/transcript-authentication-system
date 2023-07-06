import React from 'react'
import signupImg from '../assets/signup.jpg'
import { useNavigate } from 'react-router-dom';


const SignUp = () => {
  const navigate = useNavigate();
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full text-white'>
     <div classname= 'hidden sm:block'>
        <img className= 'w-full h-full object-cover'src={signupImg} alt=''/>
      </div>



      <div className='bg-gray-800 flex flex-col justify-center relative'>
      <p className='absolute right-10 top-5'onClick={()=> navigate('/Hero')}> Home</p>

        <form className='max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg'>
          <h2 className='text-4xl dark:text-white font-bold text-center'>Signup</h2>
          <div className='flex flex-col text-gray-400 py-2 '>
            <label>Name</label>
            <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type='text'/>
          </div>
          <div className='flex flex-col text-gray-400 py-2 '>
            <label>Matricule #</label>
            <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type ='string'/>
          </div>
          <div className='flex flex-col text-gray-400 py-2 '>
            <label>Password</label>
            <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type ='password'/>
          </div>
          <div className='flex justify-betweentext-gray-400 py-2'>
            <p className='flex items-center'><input className='mr-2' type="checkbox" /> Remember me</p>
          </div>
          <button className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/50 text-white font-semibold'>Sign-Up</button>
          <div><p className='my-5 py-2 text-gray-400' >Already have an account?Login</p></div>
        </form>
      </div>
    </div>
  )
}

export default SignUp