import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import {  Col } from 'react-bootstrap'
import { useNavigate, Link } from 'react-router-dom'

const schema = yup.object({
   userName: yup.string().required().min(4),
   password: yup.string().required()
})

export const Login = () => {

   const {register, formState: {errors}, handleSubmit} = useForm({resolver: yupResolver(schema)})
   const navigate = useNavigate()
   const submit = () => {
      navigate('/home', {replace: true})
   }

  return (
    <div>
       <form className='form' onSubmit={handleSubmit(submit)}  >
          <div className='index'>
            <input className='input' {...register('userName')} placeholder='User Name'  />
            {errors.userName && <p style={{color: 'red'}}>{errors.userName.message}</p>}
           </div> 

           <div className='index'>
            <input type='password' {...register('password')} placeholder='Password' />
            {errors.password && <p style={{color: 'red'}}>{errors.password.message}</p>}
           </div>

           <div className="mx-0" id='row'>
               <Link className='link'  to='/forgetPassword'>Forget Password</Link>              
               <input id='btn' type='submit' className="mx-2" value='Login' />
               <Link className='link' to='/sign-up'> Sign-up</Link>
            </div>
       </form>
    </div>
  )
}
