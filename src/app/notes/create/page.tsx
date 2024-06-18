'use client';

import NoteForm, { noteFormSchema } from '@/components/form/note-form'
import { useAddNote } from '@/hooks/useNotes';
import { Note } from '@/types/Note';
import React from 'react'
import { z } from 'zod';


export default function CreateNote() {

  const addNoteMutation = useAddNote();

  const onSubmit = (values: z.infer<typeof noteFormSchema>) => {
    const note: Note = {
      title: values.title,
      data: values.data,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    addNoteMutation.mutate(note)
  }

  return (
    <div>
      <NoteForm onSubmit={onSubmit} />
    </div>
  )
}
