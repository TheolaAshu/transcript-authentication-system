import React, { useState, useCallback } from 'react'
import signupImg from '../assets/signup.jpg'
import { useNavigate } from 'react-router-dom'
import {auth} from "../../firebase"
import { createUserWithEmailAndPassword } from '@firebase/auth'


const SignUp = ({ history}) => {
  const handleSignUp = async (e)  => {
   setLoading(true);
   try{
  await   createUserWithEmailAndPassword(auth, matricule+'@gmail.com', password).then((e)=>{
      console.log('done');
    setLoading(false);
    navigate("/transcripts");
    }).catch((e)=>{
      alert(e.message);
    setLoading(false)
    });

   } catch (error) {
    alert(error);
    setLoading(false);
   }
   };

  const navigate = useNavigate();
  const [name, setname] = useState('');
  const [matricule, setmatricule] = useState('');
  const [password, setpassword] = useState('');
  const [loading, setLoading] = useState('');

  if(loading){
    return <div>Loading</div>
  }

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full text-white'>
     <div className= 'hidden sm:block'>
        <img className= 'w-full h-full object-cover'src={signupImg} alt=''/>
      </div>

      <div className='bg-gray-800 flex flex-col justify-center relative'>
      <button className='absolute right-10 top-5 py-2 px-4 bg-teal-500 rounded-full'onClick={()=> navigate('/hero')}>Home</button>  
           <form className='max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg' onSubmit={handleSignUp}>
          <h2 className='text-4xl dark:text-white font-bold text-center'>Signup</h2>
          <div className='flex flex-col text-gray-400 py-2 '>
            <label>Name</label>
            <input value={name} className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type='text' onChange={(event) => {setname(event.target.value)}}/>
          </div>
          <div className='flex flex-col text-gray-400 py-2 '>
            <label>Matricule #</label>
            <input value={matricule} className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type ='text' onChange={(event) => {setmatricule(event.target.value);}}/>
          </div>
          <div className='flex flex-col text-gray-400 py-2 '>
            <label>Password</label>
            <input value={password} className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type ='password' onChange={(event) => {setpassword(event.target.value)}}/>
          </div>
          <div className='flex justify-betweentext-gray-400 py-2'>
            <p className='flex items-center'><input className='mr-2' type="checkbox" /> Remember me</p>
          </div>
          <button className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/50 text-white font-semibold' onClick={
            (e) => {
               e.preventDefault();
                handleSignUp();
                }
          }>Signup</button>
          <div><p className='my-5 py-2 text-gray-400'onClick={()=> navigate('/login')} >Already have an account?Login</p></div>
        </form>
      </div>
      </div>
  )
}

export default SignUp