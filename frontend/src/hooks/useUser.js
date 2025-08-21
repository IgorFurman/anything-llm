import { AuthContext } from "@/AuthContext";
import { useContext } from "react";

// interface IStore {
//   store: {
//     user: {
//       id: string;
//       username: string | null;
//       role: string;
//     };
//   };
// }

export default function useUser() {
  const context = useContext(AuthContext);

  return { ...context.store };
}
