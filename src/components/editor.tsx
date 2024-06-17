'use client'

import React from 'react'
import {useQuill} from 'react-quilljs'

export default function Editor() { 
  const { quill, quillRef } = useQuill();

  return (
    <div>
      <div ref={quillRef}></div>
    </div>
  )
}
