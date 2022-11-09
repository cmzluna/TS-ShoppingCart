import styled from "styled-components";

const Wrapper = styled.div<{ isOpen: boolean }>`
  position: relative;
  width: 20em;
  min-height: 1.5em;
  border: 0.05em solid lightblue;
  border-radius: 10px ${({ isOpen }) => (isOpen ? "10px 0 0" : "")};
  display: flex;
  align-items: center;
  gap: 0.5em;
  padding: 0.5em;
  outline: none;
  margin: 15px 0;
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
  translate: 0 25%;
  border: 0.3em solid transparent;
  border-top-color: #777;
`;

const OptionsList = styled.ul`
  position: absolute;
  margin: 0;
  padding: 0;
  display: none;
  list-style: none;
  overflow-y: auto;
  max-height: 15em;
  left: 0;
  width: 100%;
  top: calc(97%);
  border: 1px solid hsl(200, 100%, 70%);
  border-radius: 0 0 0.5em 0.5em;
  background-color: white;
  z-index: 100;
  opacity: 0.95;

  &.show {
    display: block;
  }
`;

const Option = styled.li`
  background-color: white;
  padding: 0.25em 0.5em;
  cursor: pointer;

  &:hover {
    background-color: hsl(200, 100%, 40%);
  }

  &.selected {
    background-color: hsl(200, 100%, 60%);
  }
`;

export { Wrapper, Value, ClearBtn, Divider, Caret, OptionsList, Option };
