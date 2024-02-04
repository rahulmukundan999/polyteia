// src/components/App/App.tsx
import React from "react";
import {
  StyledContainer,
  StyledPaper,
  StyledHeader,
  theme,
} from "./styles/chart";
import Dashboard from "./components/pages/Dashboard/Dashboard";
const App: React.FC = () => {
  return (
    <StyledContainer maxWidth="lg" theme={theme}>
      <StyledPaper elevation={3} theme={theme}>
        <StyledHeader variant="h4" theme={theme}>
          React Nivo Chart App
        </StyledHeader>
        <Dashboard />
      </StyledPaper>
    </StyledContainer>
  );
};

export default App;
