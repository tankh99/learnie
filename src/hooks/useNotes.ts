import { addNote, getNotes, updateNote } from "@/api/notes";
import { Note } from "@/types/Note";
import { QueryClient, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export function useGetNotes() {

  return useQuery({
    queryFn: getNotes,
    queryKey: ["notes"],
    initialData: [],
  })
}

export function useAddNote() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (note: Note) => addNote(note),
    onSuccess: () => {
      console.info("note create success")
      queryClient.invalidateQueries({queryKey: ["notes"]});
    },
    onError: (err) => {
      console.error(err);

    }
  })
}

export function useUpdateNote(id: string) {
  const queryClient = new QueryClient();
  return useMutation({
    mutationFn: (note: Note) => updateNote(id, note),
    onSuccess: () => {
      console.info("note update success")
      queryClient.invalidateQueries({queryKey: ["notes"]});
    },
  })
}