import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 5px;
  border-bottom: 1px solid lightblue;

  img {
    max-width: 70px;
    margin-right: 14px;
  }

  .info {
    display: flex;
    width: 110px;
    justify-content: center;
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
