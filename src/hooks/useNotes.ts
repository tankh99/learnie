import { getNotes } from "@/api/notes";
import { useQuery } from "@tanstack/react-query";

export function useGetNotes() {

  return useQuery({
    queryFn: getNotes,
    queryKey: ["notes"],
    initialData: [],
  })
}