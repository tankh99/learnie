import { addNote, deleteNote, getNotes, updateNote } from "@/api/notes";
import { useToast } from "@/components/ui/use-toast";
import { Note } from "@/types/Note";
import { QueryClient, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export function useGetNotes() {

  return useQuery({
    queryFn: getNotes,
    queryKey: ["notes"],
    initialData: [],
  })
}

export function useAddNote() {
  const queryClient = useQueryClient();
  const router = useRouter();
  const toast = useToast();
  return useMutation({
    mutationFn: (note: Note) => addNote(note),
    onSuccess: () => {
      toast.toast({
        title: "Notes fetched",
        description: "Notes been fetched successfully",
      })
      queryClient.invalidateQueries({queryKey: ["notes"]});
      router.push("/")
    },
    onError: (err) => {
      console.error(err);

    }
  })
}

export function useUpdateNote(id: string) {
  const queryClient = new QueryClient();
  const router = useRouter();
  const toast = useToast();
  return useMutation({
    mutationFn: (note: Note) => updateNote(id, note),
    onSuccess: () => {
      toast.toast({
        title: "Note updated",
        description: "Note has been updated successfully",
      })
      queryClient.invalidateQueries({queryKey: ["notes"]});
      router.push("/")
    },
  })
}

export function useDeleteNote(id: string) {
  const queryClient = new QueryClient();
  const toast = useToast();
  return useMutation({
    mutationFn: () => deleteNote(id),
    onSuccess: () => {
      toast.toast({
        title: "Note deleted",
        description: "Note has been deleted successfully",
      })
      queryClient.invalidateQueries({queryKey: ["notes"]});
    },
  })
}