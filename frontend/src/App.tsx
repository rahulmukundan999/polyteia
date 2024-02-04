// src/components/App/App.tsx
import React from "react";
import ChartSwitcher from "./components/Chart/ChartSwitcher";
import {
  StyledContainer,
  StyledPaper,
  StyledHeader,
  theme,
} from "./styles/chart";

const App: React.FC = () => {
  return (
    <StyledContainer maxWidth="lg" theme={theme}>
      <StyledPaper elevation={3} theme={theme}>
        <StyledHeader variant="h4" theme={theme}>
          React Nivo Chart App
        </StyledHeader>
        <ChartSwitcher />
      </StyledPaper>
    </StyledContainer>
  );
};

export default App;
