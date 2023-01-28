import { Box, styled } from "@mui/material";

const Section = styled("div")`
  min-height: 100vh;
  padding-top: 16px;
  padding-bottom: 16px;
  box-sizing: border-box;
  color: ${({ theme }) => theme.palette.common.black};
  background-color: ${({ theme }) => theme.palette.background.paper};
`;

export default Section;
