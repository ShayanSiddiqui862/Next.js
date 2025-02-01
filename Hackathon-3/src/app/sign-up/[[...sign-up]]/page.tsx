'use client'

import * as React from 'react'
import { useSignUp } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import User from '@/app/types/usedata'

import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GoPerson } from "react-icons/go";
import { MdOutlineEmail } from "react-icons/md";
import { PiLock } from "react-icons/pi";
import { IoMdCheckbox } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { client } from '@/sanity/lib/client'
// import Hero from "../components/hero";
// import Navbar from "../components/navbar";
// import Form from "../components/form"
// import Footer from "../components/footer";
export default function SignUp(data:User){
    const { isLoaded, signUp, setActive } = useSignUp()
    const [emailAddress, setEmailAddress] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [firstName, setFirstName] = React.useState('')
    const [lastName, setLastName] = React.useState('')
    const [verifying, setVerifying] = React.useState(false)
    const [code, setCode] = React.useState('')
    const [user, setUser] = React.useState<{ _type: string; firstName: string; lastName: string; email: string }>({
      _type: "customer",
      firstName: "",
      lastName: "",
      email: ""
    });
    const router = useRouter()



    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
    
        if (!isLoaded) return
    
        // Start the sign-up process using the email and password provided
        try {
          await signUp.create({
            emailAddress,
            password,
            firstName,
            lastName,
          })
    
          // Send the user an email with the verification code
          await signUp.prepareEmailAddressVerification({
            strategy: 'email_code',
          })
    
          // Set 'verifying' true to display second form
          // and capture the OTP code
          setVerifying(true)
        } catch (err: any) {
          // See https://clerk.com/docs/custom-flows/error-handling
          // for more info on error handling
          console.error(JSON.stringify(err, null, 2))
        }
      }
    
      // Handle the submission of the verification form
      const handleVerify = async (e: React.FormEvent) => {
        e.preventDefault()
    
        if (!isLoaded) return
    
        try {
          // Use the code the user provided to attempt verification
          const signUpAttempt = await signUp.attemptEmailAddressVerification({
            code,
          })
    
          // If verification was completed, set the session to active
          // and redirect the user
          if (signUpAttempt.status === 'complete') {
            try{

              const data = await client.create({
                _type: "customer",
                firstName: firstName,
                lastName: lastName,
                email: emailAddress

              })
              if(data){
                toast.success('SignUp Successful!', {position: "bottom-right", autoClose: 5000, hideProgressBar: false, closeOnClick: false, pauseOnHover: true, draggable: true, progress: undefined, theme: "colored", transition: Bounce,
                });
              }
             

              
            }
            catch(error){alert(error)};
            await setActive({ session: signUpAttempt.createdSessionId })
            router.push('/')
          } else {
            // If the status is not complete, check why. User may need to
            // complete further steps.
            console.error(JSON.stringify(signUpAttempt, null, 2))
          }
        } catch (err: any) {
          // See https://clerk.com/docs/custom-flows/error-handling
          // for more info on error handling
          console.error('Error:', JSON.stringify(err, null, 2))
        }
      }

// Display the verification form to capture the OTP code
if (verifying) {
    return (
      <>
        <h1>Verify your email</h1>
        <form onSubmit={handleVerify}>
          <label id="code">Enter your verification code</label>
          <input value={code} id="code" name="code" onChange={(e) => setCode(e.target.value)} className='ml-2 outline-none font-Helvetica text-[16px] leading-6 text-[#4F4F4F] w-[80px] md:w-[180px] border-[#E0E0E0]'/>
          <br />
          <button type="submit" className='mt-8 bg-[#FF9F0D] text-white w-[180px] md:w-[360px] h-11'>Verify</button>
        </form>
      </>
    )
  }

  // Display the initial sign-up form to capture the email and password
  return (
    <form onSubmit={handleSubmit} className='grid place-content-center mt-12'>
      <div className="border py-8 px-[37px] shadow-[0_0px_80px_0px_rgba(0,0,0,0.15)] w-[224px] md:w-[424px]">
            <p className="font-Helvetica font-bold text-[20px] leading-7">Sign Up</p>
            <div className="mt-8 flex items-center border border-[#E0E0E0] px-[14px] py-[10px] w-[180px] md:w-[360px]">
                <GoPerson className="text-[#4F4F4F] text-[24px]" /> {/* Icon */}
                <input
                    id="firstName"
                    name="firstName"
                   onChange={(e) => setFirstName(e.target.value)}
                  type="text" placeholder="First Name" className="flex-grow ml-2 outline-none font-Helvetica text-[16px] leading-6 text-[#4F4F4F] w-[80px] md:w-[180px]"/>
            </div>
            <div className="mt-4 flex items-center border border-[#E0E0E0] px-[14px] py-[10px] w-[180px] md:w-[360px]">
                <GoPerson className="text-[#4F4F4F] text-[24px]" /> {/* Icon */}
                <input
                id="lastName"
                name="lastName"
               onChange={(e) => setLastName(e.target.value)}
              type="text" placeholder="Last Name" className="flex-grow ml-2 outline-none font-Helvetica text-[16px] leading-6 text-[#4F4F4F] w-[80px] md:w-[180px]"/>
            </div>
            <div className="mt-4 flex items-center border border-[#E0E0E0] px-[14px] py-[10px] w-[180px] md:w-[360px]">
                <MdOutlineEmail className="text-[#4F4F4F] text-[24px]" /> {/* Icon */}
                <input 
                value={emailAddress}
                 id="email"
                 name="email"
                onChange={(e) => setEmailAddress(e.target.value)}
                type="email" placeholder="Email" className="flex-grow ml-2 outline-none font-Helvetica text-[16px] leading-6 text-[#4F4F4F] w-[80px] md:w-[180px]"/>
            </div>
            <div className="mt-4 flex items-center border border-[#E0E0E0] px-[14px] py-[10px] w-[180px] md:w-[360px]">
                <PiLock className="text-[#4F4F4F] text-[24px]" /> {/* Icon */}
                <input 
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password" placeholder="Password" className="flex ml-2 outline-none font-Helvetica text-[16px] leading-6 text-[#4F4F4F] w-[80px] md:w-[180px] "/>
            </div>
            <div className="mt-4 flex">
                <IoMdCheckbox className="text-[#FF9F0D] text-[20px]"/>
                <p className="ml-2 font-Helvetica font-normal text-[14px] leading-[22px]">Remember me?</p>
            </div>
                    {/* CAPTCHA Widget */}
            <div id="clerk-captcha"></div>
            <button type='submit' className="mt-8 bg-[#FF9F0D] text-white w-[180px] md:w-[360px] h-11">Continue</button>
            {/* <p className="mt-4 flex justify-end font-Helvetica font-normal text-[14px] leading-[22px] text-[#333333]">Forget password?</p>

            <div className="mt-8 flex">
                <hr className="mt-4 border border-[#E0E0E0] w-[84px] md:w-[168px]"/>
                <div className="w-8 h-8 px-[5px] py-[3px] border border-[#E0E0E0]">OR</div>
                <hr className="mt-4 border border-[#E0E0E0] w-[79px] md:w-[161px]"/>

            </div> */}
            {/* <button className="flex items-center justify-center mt-4 w-full max-w-sm gap-2 px-4 py-2 text-[16px] leading-6 font-normal font-Helvetica text-[#4F4F4F] border border-gray-300 rounded-md shadow-sm hover:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400">
                <FcGoogle className="text-xl" />
                Sign up with Google
            </button>
            <button className="flex items-center justify-center mt-4 w-full max-w-sm gap-2 px-4 py-2 text-[16px] leading-6 font-normal font-Helvetica text-[#4F4F4F] border border-gray-300 rounded-md shadow-sm hover:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400">
                <FaApple className="text-xl" />
                Sign up with Apple
            </button> */}
            <ToastContainer position="bottom-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick={false} rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="colored" transition={Bounce}
/>
            
        </div>
    </form>
  )


}