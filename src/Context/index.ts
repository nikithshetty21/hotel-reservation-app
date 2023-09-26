import { createContext } from "react";
import { AppState } from "../Interface";

export const AppContext = createContext<AppState>({} as AppState);