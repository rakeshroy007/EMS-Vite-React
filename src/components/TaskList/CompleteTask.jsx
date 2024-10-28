import React from 'react'

const CompleteTask = (props) => {
  const {data, completeButton } = props

  return (
    <div className='flex-shrink-0 h-full w-[300px] p-5 bg-[#2980b9] rounded-xl'>
            <div className='flex justify-between'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
                <h4 className='text-sm'>{data.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
            <p className='text-sm mt-2'>
                {data.taskDescription}
            </p>
            <div className='mt-4'>
              <button onClick={completeButton}  className='bg-gradient-to-r from-green-400 to-green-600 text-white font-bold text-sm py-2 px-5 rounded-full shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out w-full'>
                Complete
              </button>
            </div>
    </div>
  )
}

export default CompleteTask
