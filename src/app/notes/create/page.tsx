'use client';

import NoteForm, { noteFormSchema } from '@/components/form/note-form'
import NoteEditor from '@/components/note-editor'
import Editor from '@/components/note-editor'
import { useAddNote } from '@/hooks/useNotes';
import { Note } from '@/types/Note';
import React from 'react'
import { z } from 'zod';


export default function CreateNote() {

  const addNoteMutation = useAddNote();

  const onSubmit = (values: z.infer<typeof noteFormSchema>) => {
    console.log(values);
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
