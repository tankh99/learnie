import { Note } from "@/types/Note"
import Link from "next/link";

type P = {
  note: Note;
}

export default function NoteListItem({note}: P) {
  return (
    <Link className="cursor-pointer" href={`/notes/${note.id}`}>
      <div>
          <div>{note.title}</div>
      </div>
    </Link>
  )
}
