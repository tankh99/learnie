import { getNotes } from '@/api/notes';
import { useParams } from 'next/navigation'
import React from 'react'

export default function NotePage({params}: any) {
  return (
    <div>Note Page {params.id}</div>
  )
}

export async function generateStaticParams() {
  try {
    const notes = await getNotes();
    return notes.map((note) => {
      return ({
        id: note.id
      });
    })

  } catch (err) {
    console.error(err);
  }
}