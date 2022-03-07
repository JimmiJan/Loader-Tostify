import React from 'react'
import { useState } from 'react'
import "./Singup.css"
import { db, auth } from "../config/firebse"
import { createUserWithEmailAndPassword } from 'firebase/auth'
import Loder from './loder'
import Toaster from './Toaster'
import { toast } from 'react-toastify'
import { addDoc, collection } from 'firebase/firestore'
import { async } from '@firebase/util'
// import { Toast } from 'bootstrap'

const SingUp = () => {
  const dbref = collection(db,"user")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [Number, setNumber] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setloading] = useState(false)
  const obj ={
    name,
    email,
   
    Number
  }


  const singUp = () => {
    console.log(name, email, Number, password)
    setloading(true)
    createUserWithEmailAndPassword(auth, email, password)
  
      .then(async user => {
        console.log(user)
        console.log(user.user.uid)
        toast("use SuccesFully")
        setloading(false)
       await addDoc(dbref , {...obj, userUid:user.user.uid} )
      })
      .catch(error => {
        console.log(error)
        toast("Invalid User")
        setloading(false)
      })
      setName("")
      setPassword("")

      setEmail("")

      setNumber("")

  }






  return (
    <div className=' class pt-5'>
      <div className='cl' >
        {/* <h1>Hello</h1> */}

        <div className='w-50  min' >
          <input className='form-control input-group my-3' value={name} type="text" placeholder='Enter You Name' onChange={(e) => setName(e.target.value)} />
          <input className='form-control input-group my-3' value={email} type="email" placeholder='Enter You Email' onChange={(e) => setEmail(e.target.value)} />
          <input className='form-control input-group my-3' value={Number} type="number" placeholder='Enter You Number' onChange={(e) => setNumber(e.target.value)} />
          <input className='form-control input-group my-3' value={password} type="password" placeholder='Enter You password' onChange={(e) => setPassword(e.target.value)} />
          <div className='btn-block'>
          
          </div>
          <div>
            {
              loading
               ? <Loder />
                : 
                 <button className='btn btn-info my-3 btn-lg btn-block text-center' onClick={singUp}>
               Sing Up
             </button>
 

            }
          </div>
          <Toaster />
        </div>
      </div>

    </div>

  )
}

export default SingUp
