import React  from 'react'
import { useState, useCallback } from 'react'
import loginImg from '../assets/login.jpg'
import { useNavigate } from 'react-router-dom'
import {auth} from "../../firebase"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@firebase/auth';

const Login = ({history}) => {
  const handleLogin =useCallback(async event => {
    event.preventDefault();
   const { email, password } = event.target.elements;
   try{
    await auth
    .createUserWithEmailAndPassword(email.value, password.value);
    history.push("/");
   } catch (error) {
    alert(error);
   }
   }, [history]);

  const navigate = useNavigate();
  
  const [matricule, setmatricule] = useState('');
  const [password, setpassword] = useState('');
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full text-white'>
      <div className='hidden sm:block'>
        <img className= 'w-full h-full object-cover'src={loginImg} alt=''/>
      </div>

      <div className='bg-gray-800 flex flex-col justify-center'>
      <button className='absolute right-10 top-5 py-2 px-4 bg-teal-500 rounded-full'onClick={()=> navigate('/hero')}>Home</button>  

        <form className='max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg'onSubmit={handleLogin}>
          <h2 className='text-4xl dark:text-white font-bold text-center'>Login</h2>
          <div className='flex flex-col text-gray-400 py-2 '>
            <label>Matricule #</label>
            <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type ='text' onChange={(event) => {setmatricule(event.target.value);}}/>
          </div>
          <div className='flex flex-col text-gray-400 py-2'>
            <label>Password</label>
            <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type ='password' onChange={(event) => {setpassword(event.target.value);}}/>
          </div>
          <button className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/50 text-white font-semibold rounded-lg'onClick={(e)=> { e.preventDefault();
          console.log(matricule+'@gmail.com');
          createUserWithEmailAndPassword(auth, matricule+'@gmail.com', password)}}>Login</button>   
        </form>
      </div>
    </div>
  )
}

export default Login