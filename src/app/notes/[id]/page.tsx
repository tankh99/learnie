import { getNote, getNotes } from '@/api/notes';
import NoteForm, { noteFormSchema } from '@/components/form/note-form';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react'
import { z} from 'zod';

export default async function NotePage({params}: any) {
  const {id} = params;

  const note = await getNote(id)

  const onSubmit = async (values: z.infer<typeof noteFormSchema>) => {
    'use server'
    console.log(values);
  }

  if (!note) {
    return (
      <div>
        No note found
        <Link href="/">
          <Button>Go back</Button>
        </Link>
      </div>
    )
  }
  return (
    <div>
      <h1>Note Page</h1>
      <NoteForm defaultValues={note} onSubmit={onSubmit} />
    </div>
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