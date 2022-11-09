import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  min-height: 150px;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  padding: 10px;
  border-bottom: 1px solid lightblue;

  &:focus {
    background-color: lightblue;
  }
  img {
    max-width: 70px;
    margin-right: 14px;
  }

  .info {
    display: flex;
    width: 110px;
    height: 40px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px dotted lightblue;
    background-color: #eee;
    border-radius: 10px;
    align-content: flex-start;
  }

  .description {
    display: flex;
    flex: 1;
  }

  .no-border-radius fieldset {
    border-radius: 0;
    border: 0;
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 130px;
  margin-right: 15px;
`;

export { Wrapper, ButtonsWrapper };
