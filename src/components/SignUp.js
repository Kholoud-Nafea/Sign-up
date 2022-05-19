import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';


const schema = yup.object({
   userName: yup.string().required().min(4),
   email: yup.string().required().email(),
   password: yup.string().required(),
   gender: yup.boolean(),
   dateOfBrith: yup.date()
})

const Alert = React.forwardRef(function Alert(props, ref) {
   return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
 });

export const SignUp = () => {
   const userData = {name: '', email: '', password: '', gender: '', date: ''}
   const [user, setUser] = useState(userData)

   const [open, setOpen] = useState(false);

   const {register, formState: {errors}, handleSubmit} = useForm({resolver: yupResolver(schema)})
   

   const submit = () => {
      setOpen(true)
   }

   const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      setOpen(false);
    };

  return (
    <div>
       <form className='form' onSubmit={handleSubmit(submit)}  >
          <div className='index'>
             <label>Name</label>
            <input className='input' {...register('userName')} placeholder='User Name' onChange={ e=> setUser({...user, name: e.target.value}) } />
            {errors.userName && <p style={{color: 'red'}}>{errors.userName.message}</p>}
           </div> 

           <div className='index'>
              <label>E-mail</label>
            <input className='input' {...register('email')} placeholder='E-mail' onChange={ e=> setUser({...user, email: e.target.value}) } />
            {errors.email && <p style={{color: 'red'}}>{errors.email.message}</p>}
           </div> 

           <div className='index'>
              <label>Password</label>
            <input type='password' {...register('password')} placeholder='Password' onChange={ e=> setUser({...user, password: e.target.value}) }/>
            {errors.password && <p style={{color: 'red'}}>{errors.password.message}</p>}
           </div>

            <div className='index'>
               <label>Gender</label>
            <select className='select' onChange={ e=> setUser({...user, gender: e.target.value}) } >
               <option vale='1'>Male</option>
               <option value='2'>Female</option>
            </select>
            </div>

            <div className='index'>
              <label>Date of birth</label>
               <input type='date' {...register('date')} placeholder='date' onChange={ e=> setUser({...user, date: e.target.value}) }/>
               {errors.date && <p style={{color: 'red'}}>{errors.date.message}</p>}
           </div>

           <div className="mx-0" id='row'>
           <input id='btn' type='submit' value='Sign Up' />
            </div>
       </form>

       <Stack spacing={2} sx={{ width: '100%' }}>
         <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
         <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
            You signed-up successfully...
         </Alert>
         </Snackbar>
      </Stack>
    </div>
  )
}
