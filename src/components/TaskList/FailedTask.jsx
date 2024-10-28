import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] p-5 bg-[#c0392b] rounded-xl'>
            <div className='flex justify-between'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
                <h4 className='text-sm'>{data.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
            <p className='text-sm mt-2'>
                {data.taskDescription}
            </p>
            <div className='mt-4'>
              <button className='bg-gradient-to-r from-red-400 to-red-600 text-white font-bold text-sm py-2 px-5 rounded-full shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out w-full'>
                Failed
              </button> 
            </div>
    </div>
  )
}

export default FailedTask
