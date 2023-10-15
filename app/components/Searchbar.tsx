import React from 'react';
import { BiSearch } from 'react-icons/bi';

type Props = {};

const Searchbar = (props: Props) => {
   return (
      <div className='flex items-center border border-gray-400 p-2 rounded-full max-md:hidden'>
         <button>
            <BiSearch size={20} className='opacity-50' />
         </button>
         <input
            type='text'
            className='outline-none bg-transparent mx-2  placeholder:text-gray-600 text-[13px]'
            placeholder='Search'
            autoComplete='false'
         />
      </div>
   );
};

export default Searchbar;
