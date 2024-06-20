import { getNote, getNotes } from '@/api/notes';
import NoteForm, { noteFormSchema } from '@/components/form/note-form';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import UpdateNote from './update-note';

export default async function NotePage({params}: any) {
  const {id} = params;

  const note = await getNote(id)

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
      <UpdateNote id={id} note={note} />
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