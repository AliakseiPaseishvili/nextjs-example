import React from 'react';
import { Typography } from '@/components/Typography';
import { UserCircleIcon } from '@heroicons/react/24/solid';

export const Header = () => 
<div className='flex flex-row w-full justify-between items-center bg-gray-900 border-gray-700 rounded-md border'>
  <Typography component="h3" className='p-4'>Builder</Typography>
  <div className="pl-4 border-l h-14 border-gray-700 flex items-center pr-4">
    <UserCircleIcon className="h-6 w-6 text-white mr-2"/>
    <Typography>Team</Typography>
  </div>
</div>