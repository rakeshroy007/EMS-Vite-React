import React, { useState } from 'react'

const Login = (props) => {

  const { handleLogin } = props

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    console.log("Email is ", email)
    console.log("Password is ", password)

    handleLogin(email, password)

    setEmail("")
    setPassword("")
  }

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 rounded-xl border-emerald-600 p-20'>
        <form onSubmit={(e) => {
          submitHandler(e)
        }}
          className='flex flex-col items-center justify-center'>
          <input onChange={(e) => { setEmail(e.target.value) }} required className='outline-none bg-transparent border-2 border-emerald-600 py-3 px-5 text-xl rounded-full placeholder:text-grey-400' type="email" value={email} placeholder='Enter your email' />
          <input onChange={(e) => { setPassword(e.target.value) }} required className='outline-none bg-transparent border-2 border-emerald-600 py-3 px-5 text-xl rounded-full placeholder:text-grey-400 mt-3' type="password" value={password} placeholder='Enter your password' />
          <button className='text-white outline-none border-none bg-emerald-600 py-3 px-10 text-xl rounded-full placeholder:text-white mt-6 w-full'> Log in </button>
        </form>
      </div>
    </div>
  )
}

export default Login
