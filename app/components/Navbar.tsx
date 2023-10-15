/* eslint-disable @next/next/no-img-element */
'use client';

import React, { useState } from 'react';
import Searchbar from './Searchbar';
import Link from 'next/link';
import { AiOutlineShoppingCart } from 'react-icons/ai';

type Props = {};

const Navbar = (props: Props) => {
   const [showProfile, setshowProfile] = useState<boolean>(false);
   const [showNav, setshowNav] = useState<boolean>(false);
   return (
      <div>
         <div className='flex items-center justify-between py-4 relative'>
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
                  <Link href='/cart'>
                     <div className='p-2 rounded-full'>
                        <AiOutlineShoppingCart size={20} />
                     </div>
                  </Link>
               </div>
               <div className='relative cursor-pointer'>
                  <img
                     src='https://github.com/shadcn.png'
                     alt='avatar'
                     className='w-[35px] h-[35px] object-cover rounded-full'
                  />
                  <div className='absolute z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md '>
                     <Link href='/sign'> Setting</Link>
                     <Link href='/sign'> Sign In</Link>
                     <Link href='/sign'> Sign In</Link>
                     <Link href='/sign'> Sign In</Link>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Navbar;
