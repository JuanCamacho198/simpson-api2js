import { createContext, useState } from "react";

export const PageContext = createContext();

export function PageProvider({ children }) {
  const [pageActual, setPageActual] = useState(1);

  return (
    <PageContext.Provider value={{ pageActual, setPageActual }}>
      {children}
    </PageContext.Provider>
  );
}