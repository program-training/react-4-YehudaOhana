import { createContext, useState } from "react";

type Theme = "light" | "dark";

interface ContextType {
  mod: Theme;
  setMod: React.Dispatch<React.SetStateAction<Theme>>;
}

interface ModContextProps {
  children: React.ReactNode;
}

export const CreateContext = createContext<ContextType | null>(null);

const ThemeContextProvider: React.FC<ModContextProps> = (props) => {
  const [mod, setMod] = useState<Theme>("light");
  return <CreateContext.Provider value={{ mod, setMod }}>{props.children}</CreateContext.Provider>;
};
export default ThemeContextProvider;
