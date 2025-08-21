import { AUTH_TOKEN, AUTH_USER } from "@/utils/constants";
import { useEffect, useState } from "react";

export default function useLoginMode() {
  const [mode, setMode] = useState(null);

  useEffect(() => {
    if (!window) return;
    const user = !!window.localStorage.getItem(AUTH_USER);
    const token = !!window.localStorage.getItem(AUTH_TOKEN);
    let _mode = null;
    if (user && token) _mode = "multi";
    if (!user && token) _mode = "single";
    setMode(_mode);
  }, [window]);

  return mode;
}
