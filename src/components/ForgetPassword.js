import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup.object({
   email: yup.string().required().email(),
})

export const ForgetPassword = () => {
   const {register, formState: {errors}, handleSubmit} = useForm({resolver: yupResolver(schema)})
  
   const submit = (data) => {
      console.log(data)
   }

  return (
    <div>
       <form className='form' onSubmit={handleSubmit(submit)}  >
          <div className='index'>
            <input className='input' {...register('email')} placeholder='E-mail' />
            {errors.email && <p style={{color: 'red'}}>{errors.email.message}</p>}
           </div> 

           <div className="mx-0" id='row'>
               <button id='btn'>Send</button>
            </div>
       </form>
    </div>
  )
}
