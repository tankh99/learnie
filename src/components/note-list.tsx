'use client';

import { getNotes } from '@/api/notes'
import { useGetNotes } from '@/hooks/useNotes';
import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react'
import NoteListItem from './note-list-item';
import Link from 'next/link';
import { Button } from './ui/button';

export default function NoteList() {
    // const [notes, setNotes] = useState([])
    const { data: notes, isLoading } = useGetNotes();

    return (
        <div>
            <div className='text-4xl font-extrabold'>Notes</div>
            <Link href="/notes/create">
                <Button>Create Note</Button>
            </Link>
            {notes.map((note) => (
              <NoteListItem key={note.id} note={note}/>  
            ))}
        </div>
    )
}
