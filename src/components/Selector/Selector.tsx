import {
  Wrapper,
  Value,
  ClearBtn,
  Divider,
  Caret,
  OptionsList,
  Option,
} from "./styles";
import { SelectOption } from "../../types";
import { useState } from "react";

type Props = {
  options: SelectOption[];
  value?: SelectOption;
  onChange: (value: SelectOption | undefined) => void;
};

const Selector: React.FC<Props> = ({ value, onChange, options }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Wrapper
      tabIndex={0}
      onClick={() => setIsOpen((val) => !val)}
      onBlur={() => setIsOpen(false)}
    >
      <Value>{value?.label}</Value>
      <ClearBtn>&times;</ClearBtn>
      <Divider></Divider>
      <Caret></Caret>
      <OptionsList className={isOpen ? "show" : ""}>
        {options.map(({ value, label }) => (
          <Option onChange={(value) => undefined} key={value}>
            {label}
          </Option>
        ))}
      </OptionsList>
    </Wrapper>
  );
};

export default Selector;
