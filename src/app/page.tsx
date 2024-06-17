import Editor from "@/components/editor";
import NoteList from "@/components/note-list";
import Image from "next/image";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Editor/>
      <NoteList/>
      
    </main>
  );
}
