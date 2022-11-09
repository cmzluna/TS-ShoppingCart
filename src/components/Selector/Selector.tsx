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

  const handleClear = (ev: React.MouseEvent<HTMLElement>) => {
    ev.stopPropagation();
    onChange(undefined);
  };

  const isOptionSelected = (option: SelectOption) =>
    option?.label === value?.label;

  const selectOption = (option: SelectOption) => {
    return onChange(option);
  };

  return (
    <Wrapper
      tabIndex={0}
      onClick={() => setIsOpen((val) => !val)}
      onBlur={() => setIsOpen(false)}
      isOpen={isOpen}
    >
      <Value>{value?.label}</Value>
      <ClearBtn onClick={handleClear}>&times;</ClearBtn>
      <Divider></Divider>
      <Caret></Caret>
      <OptionsList className={isOpen ? "show" : ""}>
        {options.map((option) => {
          const { label } = option;

          return (
            <Option
              key={label}
              onClick={(e) => {
                e.stopPropagation(); //
                selectOption(option);
                setIsOpen(false); //
              }}
              className={`${isOptionSelected(option) ? "selected" : ""}`}
            >
              {label}
            </Option>
          );
        })}
      </OptionsList>
    </Wrapper>
  );
};

export default Selector;
