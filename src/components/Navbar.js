import React, {useState} from 'react';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
      setNav(!nav)
     }
        
  return (
    <div className='flex justify-between items center h-24  [max-w-1240px] mx-auto px-4 text-white'>
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>TransApp</h1>

      <ul className='hidden md:flex'>
        <li className='p-4'>Home</li>
        <li className='p-4'>Sign-up</li>
        <li className='p-4'>Login</li>
        <li className='p-4'>Logout</li>
        <li className='p-4'>All Transcripts</li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
        {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
      </div>
      <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>TransApp</h1>

        <ul className='uppercase p-4'>
          <li className='p-4 border-b border-gray-600'>Home</li>
          <li className='p-4 border-b border-gray-600'>Sign-up</li>
          <li className='p-4 border-b border-gray-600'>Login</li>
          <li className='p-4 border-b border-gray-600'>Logout</li>
          <li className='p-4 border-b border-gray-600'>All Transcripts</li>
          <li className='p-4'>Contact</li>
        </ul>
      </div>
    </div> 
  );
};

export default Navbar;