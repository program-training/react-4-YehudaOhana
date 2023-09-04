import React, { createContext, useState } from "react";

export const TextContext = createContext<{ text: string; setText: React.Dispatch<React.SetStateAction<string>> } | null>(null);

interface TextContextProps {
  children: React.ReactNode;
}

export default function TextContextProvider(props: TextContextProps) {
  const [text, setText] = useState<string>("Hello world");
  return <TextContext.Provider value={{ text, setText }}>{props.children}</TextContext.Provider>;
}
