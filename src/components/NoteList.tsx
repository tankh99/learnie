'use client';

import { getNotes } from '@/api/notes'
import React, { useEffect } from 'react'

export default function NoteList() {
    useEffect(() => {
        const fetchData = async() => {
            const notes = await getNotes()
            console.info(notes)
        }
        fetchData();
    }, [])
    return (
        <div>NoteList</div>
    )
}
