import { ThemeProvider } from "@mui/material";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import StoreProvider from "../providers/store";
import { theme } from "../config/theme";
import Header from "../components/Header";

// @ts-ignore
export const Wrapper: React.PropsWithChildren<any> = ({ children }) => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <StoreProvider>
          <Header />
          {children}
        </StoreProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default Wrapper;
