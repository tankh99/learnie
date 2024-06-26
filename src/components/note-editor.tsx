'use client'

import React, { useEffect } from 'react'
import {useQuill} from 'react-quilljs'

type P = {
  defaultValue?: string;
  onChange: any
}

export default function NoteEditor({onChange, defaultValue}: P) { 
  const { quill, quillRef } = useQuill();

  useEffect(() => {
    if (quill) {
      quill.on("text-change", (delta, oldDelta, source) => {
        // console.log("text-change", delta, oldDelta, source);
        // console.log(quill.root);
        onChange(quill.root.innerHTML);
        // onChange(quill.getContents().ops)
      })
      quill.clipboard.dangerouslyPasteHTML(0, defaultValue || '')
    }
  }, [quill])

  return (
    <div>
      <div ref={quillRef}></div>
    </div>
  )
}
