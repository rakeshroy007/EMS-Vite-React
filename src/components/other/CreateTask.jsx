import React, { useState, useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'



const CreateTask = () => {
    const [usersData, setUsersData] = useContext(AuthContext)

    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [assignTo, setAssignTo] = useState('')
    const [category, setCategory] = useState('')

    // Function to generate the next sequential task id
    const getNextTaskId = () => {
        const employees = JSON.parse(localStorage.getItem('employees')) || [];
        let maxId = 3;

        // Find the highest existing task id across all employees
        employees.forEach(employee => {
            employee.tasks.forEach(task => {
                if (task.id > maxId) maxId = task.id;
            });
        });

        return maxId + 1; // Increment maxId to get the next task id
    };

    const submitHandler = (e) => {
        e.preventDefault()

        const newTask = {
            id: getNextTaskId(),
            taskTitle,
            taskDescription,
            taskDate,
            assignTo,
            category,
            active: false,
            newTask: true,
            failed: false,
            completed: false
        }

        const updatedUserData = usersData.map((employee) => {
            if (assignTo.toLowerCase().trim() === employee.firstname.toLowerCase().trim()) {
                return {
                    ...employee,
                    tasks: [...employee.tasks, newTask],
                };
            }
            return employee;
        });

        // Update localStorage and usersData contex
        setUsersData(updatedUserData);
        localStorage.setItem('employees', JSON.stringify(updatedUserData));

        // Clear the form fields
        setTaskTitle('');
        setTaskDescription('');
        setTaskDate('');
        setAssignTo('');
        setCategory('');
    }

    return (
        <div className='p-5 bg-[#1c1c1c] mt-5 rounded'>
            <form onSubmit={submitHandler} className='flex flex-wrap w-full items-start justify-between'>
                <div className='w-1/2'>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                        <input
                            value={taskTitle}
                            onChange={(e) => setTaskTitle(e.target.value)}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
                            type="text"
                            placeholder='Make a UI design'
                        />
                    </div>
                    <div>
                        <h3>Date</h3>
                        <input
                            value={taskDate}
                            onChange={(e) => setTaskDate(e.target.value)}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
                            type="date"
                        />
                    </div>
                    <div>
                        <h3>Assign to</h3>
                        <input
                            value={assignTo}
                            onChange={(e) => setAssignTo(e.target.value)}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
                            type="text"
                            placeholder='employee name'
                        />
                    </div>
                    <div>
                        <h3>Category</h3>
                        <input
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
                            type="text"
                            placeholder='design, dev, etc'
                        />
                    </div>
                </div>

                <div className='w-2/5 flex flex-col items-start'>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                    <textarea
                        value={taskDescription}
                        onChange={(e) => setTaskDescription(e.target.value)}
                        className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400'
                    ></textarea>
                    <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
                </div>
            </form>
        </div>
    )
}

export default CreateTask;




/*
📌📌📌 Your Code Data Flow (Step-by-Step Execution):
1. Component Rendering:
    ➡️  When the component is rendered, React first initializes all the useState hooks. These include:
            taskTitle (empty string by default)
            taskDescription (empty string)
            taskDate (empty string)
            assignTo (empty string)
            category (empty string)
            newTask (an empty object by default)
2. Form Rendering:
    ➡️ The form is rendered with all input fields and a Create Task button. These input fields are linked to the respective state variables like taskTitle, taskDescription, etc.
    ➡️ Each input field has an onChange handler that updates its respective state whenever the user types in the input.
3. User Fills the Form:
    ➡️ When the user fills out the form and hits "Create Task":
        The input fields trigger onChange events, which update the state variables (taskTitle, taskDescription, etc.) as the user types.
4. Form Submission:
    ➡️ Upon submitting the form (when the "Create Task" button is clicked), the submitHandler function is triggered via the form's onSubmit event.
5. Inside submitHandler:
    ➡️ Step 1: The event's default behavior is prevented (e.preventDefault()), so the page doesn’t refresh.
    ➡️ Step 2: The newTask state is set to the new task object created from the form inputs:
            setNewTask({taskTitle, taskDescription, taskDate, assignTo, category, active:false, newTask:true, failed:false, completed:false});
        📌 Issue: At this point, the newTask state update is asynchronous, meaning React doesn’t immediately update the newTask value.
    ➡️ Step 3: The code fetches employee data from localStorage and parses it into the data variable.
        const data = JSON.parse(localStorage.getItem("employees"));
    ➡️ Step 4: The code loops through the data array to find the employee with the matching assignTo value.
    ➡️ Step 5: When a matching employee is found, the newTask (which is still the old value because of React's asynchronous state updates) is pushed into the employee's tasks array:
           elem.tasks.push(newTask);
        📌 Issue: Since newTask hasn't been updated yet, it is still an empty object at this point
    ➡️ Step 6: The updated employee data is then saved back to localStorage using localStorage.setItem.
    ➡️ Step 7: Finally, the form fields are reset by clearing the state variables (setTaskTitle(''), etc.).




📌📌📌📌 
👉 Your Code: You update the newTask state but try to use it immediately, which doesn’t work because setState is asynchronous.
👉 My Code: I avoid the need for a state update for newTask and create the newTask object directly inside the submitHandler, avoiding any asynchronous state update delays.
*/