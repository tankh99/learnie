import Editor from "@/components/editor";
import NoteList from "@/components/note-list";
import Image from "next/image";

export default function Home() {

  return (
    <main className="flex min-h-screen">
      <NoteList/>
      
    </main>
  );
}
