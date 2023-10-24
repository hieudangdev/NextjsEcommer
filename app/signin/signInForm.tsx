'use client';
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import Button from '../components/ui/Button';
import Link  from 'next/link';

type Props = {};

const SignInForm = (props: Props) => {
   const [user, setuser] = useState({
      email: '',
      password: '',
   });
   const login = () => {
      try {
         signIn('credentials', {
            email: user.email,
            password: user.password,
            redirect: true,
            callbackUrl: '/',
         });
      } catch (error) {
         console.log(error);
      }
   };
   return (
      <div className='flex flex-col items-center  justify-center min-h-screen py-2 '>
         <div className='p-7 rounded-lg text-sm shadow-lg border-zinc-400 border flex flex-col '>
            <div className='flex justify-between font-semibold text-2xl'>
               <a href='/'>ECOM</a>
               <h1 className='text-xl font-medium mb-4'>Sign In</h1>
            </div>
            <label htmlFor='' className='ml-2'>
               Email
            </label>
            <input
               type='text'
               className='p-2 border-zinc-600   bg-transparent text-white mt-1 focus:border-white   border rounded-lg w-[300px] mb-4 focus:outline-none '
               id='email'
               value={user.email}
               onChange={(e) => setuser({ ...user, email: e.target.value })}
               placeholder='email'
            />
           
            <label htmlFor='' className='ml-2'>
               Password
            </label>
            <input
               type='password'
               className='p-2 border-zinc-600   bg-transparent text-white mt-1 focus:border-white   border rounded-lg w-[300px] mb-4 focus:outline-none '
               id='password'
               value={user.password}
               onChange={(e) => setuser({ ...user, password: e.target.value })}
               placeholder='password'
            />
            <div className='flex min-w-full justify-center'>
               <Button type='submit'  onClick={login} className='bg-white py-2 min-w-full text-black'>
                  Sign in with Email
               </Button>
            </div>
            <div className='relative my-2'>
               <div className='absolute inset-0 flex items-center'>
                  <span className='w-full border-t border-zinc-600' />
               </div>
               <div className='relative flex justify-center text-sm  '>
                  <span className='bg-black px-2 text-slate-300'>Or continue with</span>
               </div>
            </div>
            <Button className='py-2 min-w-full'>
            <Link href='/signup'>Sign Up </Link>
            </Button>
         </div>
      </div>
   );
};

export default SignInForm;
