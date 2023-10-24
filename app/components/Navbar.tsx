/* eslint-disable @next/next/no-img-element */
'use client';
import Link from 'next/link';
import { useState } from 'react';
import { AiOutlineIdcard, AiOutlineLogin, AiOutlineShoppingCart } from 'react-icons/ai';
import Searchbar from './Searchbar';
import { BiMenu, BiUserPin } from 'react-icons/bi';
import { CiSettings } from 'react-icons/ci';
import Button from './ui/Button';
import {signIn, signOut, useSession } from 'next-auth/react'

type Props = {};

const Navbar = (props: Props) => {
   const [showProfile, setshowProfile] = useState<boolean>(false);
   const [showNav, setshowNav] = useState<boolean>(false);
   const {data:session} = useSession();


   return (
      <div>
         <div className='flex items-center justify-between  relative'>
            <button onClick={() => setshowNav(!showNav)} className='md:hidden     '>
               <BiMenu size={22} />
            </button>
            <div className='flex items-center md:space-x-10 lg:space-x-20'>
               <div className='font-semibold text-2xl'>
                  <a href='/'>ECOM</a>
               </div>
               <nav className='max-md:hidden'>
                  <ul className='flex items-center lg:space-x-10 space-x-7 opacity-70 text-[15px]'>
                     <li>
                        <a href='/'>Shop</a>
                     </li>
                     <li>
                        <a href='filters'>Filters</a>
                     </li>
                     <li>
                        <a href='myproducts'>Products</a>
                     </li>
                  </ul>
               </nav>
            </div>
            <div className='flex items-center space-x-4'>
               <Searchbar />
               <div>
                  <Link href='/cart' className='p-2 rounded-full'>
                     <AiOutlineShoppingCart size={20} />
                  </Link>
               </div>
               {session ? (
                  <div onClick={() => setshowProfile(!showProfile)} className='relative cursor-pointer'>
                     <img
                        src='https://github.com/shadcn.png'
                        alt='avatar'
                        className='w-[35px] h-[35px] object-cover rounded-full'
                     />
                     
                     <div
                        className={`${
                           showProfile ? '' : 'hidden'
                        } absolute z-50 bg-black min-w-[150px] mt-2 right-0 overflow-auto space-y-2 p-2 rounded-md border border-gray-600 bg-popover text-sm shadow-md `}
                     >
                        <Link
                           href='/sign'
                           className=' border-b flex border-gray-600 items-center  hover:bg-zinc-800 rounded-sm p-1 px-1 '
                        >
                           <BiUserPin size={18} className='mr-2' />
                           {session.user.name}
                        </Link>
                        <Link href='/sign' className=' flex  items-center hover:bg-zinc-800 rounded-sm p-1 px-1'>
                           <AiOutlineIdcard size={18} className='mr-2' />
                           Billing
                        </Link>
                        <Link href='/sign' className=' flex  items-center hover:bg-zinc-800 rounded-sm p-1 px-1'>
                           <CiSettings size={18} className='mr-2' />
                           Settings
                        </Link>
                        
                        <button
                           onClick={()=> signOut()}
                           className=' flex border-gray-600  min-w-full border-t items-center hover:bg-zinc-800 rounded-sm p-1 px-1'
                        >
                           <AiOutlineLogin size={16} className='mr-2' />
                           Log out
                        </button>
                     </div>
                  </div>
               ) : (
                  <div className='space-x-3'>
                     <Button onClick={()=> signIn()}>
                         Sign in 
                     </Button>
                     {/* <Button onClick={()=>signUp()}>
                        Sign up 
                     </Button> */}
                  </div>
               )}
            </div>
         </div>
         <div className={`md:hidden ease-linear  transition-all ${showNav ? '' : 'h-0 invisible opacity-0'}`}>
            <ul className='flex flex-col text-md justify-center  '>
               <li className=' border-t border-gray-500 py-2'>
                  <a href='/shop' className='inline-block w-full text'>
                     Shop
                  </a>
               </li>
               <li className=' border-t border-gray-500 py-2'>
                  <a href='/filter' className='inline-block w-full'>
                     Filter
                  </a>
               </li>
               <li className=' border-t border-gray-500 py-2'>
                  <a href='/product' className='inline-block w-full'>
                     Product
                  </a>
               </li>
            </ul>
         </div>
      </div>
   );
};

export default Navbar;
