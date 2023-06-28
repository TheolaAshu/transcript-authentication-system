import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'

const AllTranscripts = () => {
  return (
    <form className='w[440px] relative'>
      <div className='relative'>
        <input type='search' placeholder='Type Here' className='w-full p-4 rounded-full bg-slate-800'></input>
        <button className='absolute right-1 top-1/2 -translate-y-1/2 p-4 bg-slate-900 rounded-full'>
          <AiOutlineSearch/>
        </button>
      </div>
      <div className='absolute top-20 p-4 bg-slate-800 text-white w-full rounded-xl left-1/2 -translate-x-1/2 flex flex-col gap-2'>
      </div>
    </form>
  )
}

export default AllTranscripts