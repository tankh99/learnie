import { addNote, getNotes } from "@/api/notes";
import { Note } from "@/types/Note";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

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
      console.info("Success")
      queryClient.invalidateQueries({queryKey: ["notes"]});
    },
    onError: (err) => {
      console.error(err);

    }
  })
}