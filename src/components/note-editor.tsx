'use client'

import React, { useEffect } from 'react'
import {useQuill} from 'react-quilljs'

type P = {
  defaultValue?: string;
  onChange: any
}

export default function NoteEditor({onChange}: P) { 
  const { quill, quillRef } = useQuill();

  useEffect(() => {
    if (quill) {
      quill.on("text-change", (delta, oldDelta, source) => {
        // console.log("text-change", delta, oldDelta, source);
        // console.log(quill.root);
        console.log(quill.getText())
        console.log(quill.getContents())
        onChange(quill.getContents())
        
      })
      // quill.clipboard.dangerouslyPasteHTML(0, "<h1>hello</h1>")
    }
  }, [quill])

  return (
    <div>
      <div ref={quillRef}></div>
    </div>
  )
}
