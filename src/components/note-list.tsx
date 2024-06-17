'use client';

import { getNotes } from '@/api/notes'
import { useGetNotes } from '@/hooks/useNotes';
import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react'
import NoteListItem from './note-list-item';

export default function NoteList() {
    // const [notes, setNotes] = useState([])
    const { data: notes, isLoading } = useGetNotes();

    return (
        <div>
            NoteList
            {notes.map((note) => (
              <NoteListItem key={note.id} note={note}/>  
            ))}
        </div>
    )
}
