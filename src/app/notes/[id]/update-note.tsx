'use client';

import { updateNote } from '@/api/notes';
import NoteForm, { noteFormSchema } from '@/components/form/note-form'
import { Note } from '@/types/Note'
import React from 'react'
import { z } from 'zod';

type P = {
  id: string;
  note: Note;
}

export default function UpdateNote({id, note}: P) {

  const onSubmit = async (values: z.infer<typeof noteFormSchema>) => {
    console.log(values, note);
    const updatedNote: Note = {
      title: values.title,
      data: values.data,
      createdAt: note!.createdAt,
      updatedAt: new Date(),
    }
    updateNote(id, updatedNote);
  }

  return (
    <div>
      <NoteForm defaultValues={note} onSubmit={onSubmit} />
    </div>
  )
}
