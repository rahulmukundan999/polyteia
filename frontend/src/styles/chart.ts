// src/components/App/styles.ts
import { Container, Typography, Paper } from "@mui/material";
import { Theme, createTheme } from "@mui/system";
import styled from "@emotion/styled";

// Extend the default theme with custom properties
export const theme = createTheme({
  spacing: (factor: number) => `${8 * factor}px`, // Customize the spacing
});

export const StyledContainer = styled(Container)`
  padding-top: ${({ theme }: { theme: Theme }) => theme.spacing(4)} !important;
  padding-bottom: ${({ theme }: { theme: Theme }) =>
    theme.spacing(4)} !important;
`;

export const StyledPaper = styled(Paper)`
  padding: ${({ theme }: { theme: Theme }) => theme.spacing(3)} !important;
  display: flex;
  overflow: auto;
  flex-direction: column;
  background-color: #f5f5f5;
  border-radius: 8px;
`;

export const StyledHeader = styled(Typography)`
  margin-bottom: ${({ theme }: { theme: Theme }) =>
    theme.spacing(3)} !important;
  color: #333;
  font-weight: bold;
`;
