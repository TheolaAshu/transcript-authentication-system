import React from 'react'

const Adminlogin = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full text-black'>
            <div className='bg-gray-800 flex flex-col justify-center'>
        <form className='max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg'>
          <h2 className='text-4xl dark:text-white font-bold text-center'>Login</h2>
          <div className='flex flex-col text-gray-400 py-2 '>
            <label>E-mail</label>
            <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type ='email adress'/>
          </div>
          <div className='flex flex-col text-gray-400 py-2'>
            <label>Password</label>
            <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type ='password'/>
          </div>
          <button className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/50 text-white font-semibold rounded-lg'>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Adminlogin
    