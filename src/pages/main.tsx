import styled from "styled-components";

const Main = () => {
  return (
    <Container>
      <InputBox>
        <h1>나만의 할 일 !!</h1>
        <Input></Input>
      </InputBox>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;

const InputBox = styled.div`
  width: 70%;
  margin: auto;
  text-align: center;
`;

const Input = styled.input`
  width: 50%;
  height: 50px;
  font-size: 25px;
`;

export default Main;
