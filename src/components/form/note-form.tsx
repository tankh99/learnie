'use client'

import React from 'react'
import { Form } from '../ui/form'
import {z} from 'zod';
import { FormTextInput } from './form-text-input';
import { useForm } from 'react-hook-form';
import {zodResolver} from "@hookform/resolvers/zod";
import NoteEditor from '../note-editor';
import { Button } from '../ui/button';

type P = {
  defaultValues?: z.infer<typeof noteFormSchema>;
  onSubmit: any;
}

export const noteFormSchema = z.object({
  title: z.string().min(1),
  data: z.string()
})

const DEFAULT_VALUES: z.infer<typeof noteFormSchema> = {
  title: 'Example title',
  data: '[{"insert":"Hello World!\n"}]'
}

export default function NoteForm({onSubmit, defaultValues}: P) {

  const form = useForm({
    mode: "onChange",
    resolver: zodResolver(noteFormSchema),
    defaultValues: DEFAULT_VALUES,
  })

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormTextInput name="title" label="Title" form={form}/>
        <NoteEditor 
          defaultValue={defaultValues?.data}
          onChange={(data: any) => form.setValue('data', JSON.stringify(data))} />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
