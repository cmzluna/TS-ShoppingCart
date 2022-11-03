import styled from "styled-components";
import IconButton from "@mui/material/IconButton";

const Wrapper = styled.div``;
const StyledButton = styled(IconButton)`
  position: fixed;
  z-index: 100;
  right: 20px;
  top: 20px;
  border: 1px solid lightblue;
`;

export { Wrapper, StyledButton };
