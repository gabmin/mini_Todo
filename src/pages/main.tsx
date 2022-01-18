import styled from "styled-components";

const Main = () => {
  return (
    <Container>
      <div>
        <h1>안녕하세요</h1>
        <Input></Input>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 1000px;
  margin: auto;
`;

const Input = styled.input`
  width: 300px;
  height: 50px;
  font-size: 25px;
`;

export default Main;
