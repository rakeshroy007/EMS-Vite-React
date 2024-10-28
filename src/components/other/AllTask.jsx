import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

    const employees = JSON.parse(localStorage.getItem('employees')) || [];



    return (
        <div className='bg-[#1c1c1c] p-5 rounded mt-5 h-48'>

            <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded'>
                <h2 className='text-lg font-medium w-1/5'>Employee Name</h2>
                <h3 className='text-lg font-medium w-1/5'>New Task</h3>
                <h5 className='text-lg font-medium w-1/5'>Active Task</h5>
                <h5 className='text-lg font-medium w-1/5'>Completed</h5>
                <h5 className='text-lg font-medium w-1/5'>Reject</h5>
            </div>

            <div id='allTask' className='h-[80%] overflow-auto'>

                {employees && employees.length > 0 ? (
                    employees.map((elem, idx) => {
                        return (
                            <div key={idx} className='border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded'>
                                <h2 className='text-lg font-medium w-1/5'>{elem.firstname}</h2>
                                <h3 className='text-lg font-medium w-1/5 text-blue-400'>{elem.tasks.filter(task => task.newTask).length}</h3>
                                <h5 className='text-lg font-medium w-1/5 text-yellow-400'>{elem.tasks.filter(task => task.active).length}</h5>
                                <h5 className='text-lg font-medium w-1/5 text-white'>{elem.tasks.filter(task => task.completed).length}</h5>
                                <h5 className='text-lg font-medium w-1/5 text-red-600'>{elem.tasks.filter(task => task.failed).length}</h5>
                            </div>
                        )
                    })
                ) : (
                    <p>No employees available</p>
                )}
            </div>
        </div>
    )
}

export default AllTask
