import { signInWithEmailAndPassword } from 'firebase/auth'
import React from 'react'
import { useState } from 'react'
import { auth } from '../config/firebse'
import Loder from './loder'

const Login = () => {

const [email,setEmail] =useState("")
    const [password, setPassword] = useState("")
  const [loading, setloading] = useState(false)
 const Login =()=>{
    setloading(true)
    signInWithEmailAndPassword(auth,email,password)
   

    .then(async user => {
        console.log(user)
        // console.log(user.user.uid)
        // toast("use SuccesFully")
        setloading(false)
    //    await addDoc(dbref , {...obj, userUid:user.user.uid} )
      })
      .catch(error => {
        console.log(error)
        // toast("Invalid User")
        setloading(false)
      })
 }
  
    return (
        <div className='w-40 alein-item-center'>

            <input className='form-control input-group my-3' value={email} 
            type="email" placeholder='Enter You Email' onChange={(e) => setEmail(e.target.value)} />
            <input className='form-control input-group my-3' value={password} 
            type="password" placeholder='Enter You password' onChange={(e) => setPassword(e.target.value)} />


            <div>
            {
              loading
               ? <Loder /> :   <button className='btn btn-info my-3 btn-lg btn-block text-center' onClick={Login}>
               Login
             </button>
 

            }
          </div>

        </div>
    )
}

export default Login
