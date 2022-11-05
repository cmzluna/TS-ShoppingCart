import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  width: 20em;
  min-height: 1.5em;
  border: 0.05em solid #777;
  display: flex;
  align-items: center;
  gap: 0.5em;
  padding: 0.5em;
  outline: none;

  &:focus {
    border-color: hsl(200, 100%, 50%);
  }
`;

const Value = styled.span`
  flex-grow: 1;
`;

const ClearBtn = styled.button`
  background: none;
  color: #777;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0;
  font-size: 1.25em;

  &:focus,
  &:hover {
    color: #333;
  }
`;

const Divider = styled.div`
  background-color: #777;
  align-self: stretch;
  width: 0.05em;
`;
const Caret = styled.div`
  border: 1em solid transparent;
  border-top-color: #777;
`;

const OptionsList = styled.ul``;

const Option = styled.li``;

export { Wrapper, Value, ClearBtn, Divider, Caret, OptionsList, Option };
