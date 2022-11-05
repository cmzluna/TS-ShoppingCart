import {
  Wrapper,
  Value,
  ClearBtn,
  Divider,
  Caret,
  OptionsList,
  Option,
} from "./styles";

type SelectOption = {
  label: string;
  value: string | number;
};

type Props = {
  options: SelectOption[];
  value?: SelectOption;
  onChange: (value: SelectOption | undefined) => void;
};

const Selector: React.FC<Props> = ({ value, onChange, options }) => {
  return (
    <Wrapper tabIndex={0}>
      <Value>Value</Value>
      <ClearBtn>&times;</ClearBtn>
      <Divider></Divider>
      <Caret></Caret>
      <OptionsList>
        {options.map(({ value, label }) => (
          <Option key={value}>{label}</Option>
        ))}
      </OptionsList>
    </Wrapper>
  );
};

export default Selector;
