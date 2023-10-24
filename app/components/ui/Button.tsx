'use client';

import React from 'react';

type PropsButton = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

const Button = (props: PropsButton) => {
   const { children, className, ...rest } = props;
   return (
      <button
         {...rest}
         className={`${className} disabled:opacity-70 border w-max hover:opacity-70 py-1 px-2 shadow-sm rounded-md border-gray-500`}
      >
         {children}
      </button>
   );
};

export default Button;
