import { Note } from "@/types/Note"

type P = {
  note: Note;
}

export default function NoteListItem({note}: P) {
  return (
    <div>
      <div>{note.title}</div>
    </div>
  )
}
