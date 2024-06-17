'use client'

import React from 'react'
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const router = useRouter();
  return (
    <div className='sticky top-0 w-full bg-blue-200 py-2 px-3'>
      <ArrowLeft size={24} className='cursor-pointer' onClick={() => router.back()} />
    </div>
  )
}
