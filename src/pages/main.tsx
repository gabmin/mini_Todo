import * as React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import TodoList from "../components/todoList";
import axios from "axios";
import { Data } from "../shared/types";
// <></> === React.Fragment 타입스크립트나 바벨이 변환할때 자동적으로 변환시켜줌.
// 이때 React를 import시켜주지 않으면 오류가 발생한다.

const Main = () => {
  const [data, setData] = useState<Data[]>([]);
  const [title, setTitles] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:8080")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(data);
  return (
    <Container>
      <InputBox>
        <h1>나만의 할 일 !!</h1>
        <form>
          <Input
            type="text"
            value={title}
            onChange={(e) => {
              setTitles(e.target.value);
            }}
          />
        </form>
        {data.map((v, i) => (
          <TodoList key={i} data={v} />
        ))}
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
