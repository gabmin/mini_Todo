import * as React from "react";
import { useEffect, useState, useCallback, useRef } from "react";
import styled from "styled-components";
import TodoList from "../components/todoList";
import axios from "axios";
import { Data } from "../shared/types";
// <></> === React.Fragment 타입스크립트나 바벨이 변환할때 자동적으로 변환시켜줌.
// 이때 React를 import시켜주지 않으면 오류가 발생한다.

const Main = () => {
  const [data, setData] = useState<Data[]>([]);
  const [title, setTitles] = useState("");
  const [desc, setDesc] = useState("");
  const titleEl = useRef(null);
  const descEl = useRef(null);

  useEffect(() => {
    axios
      .get("http://localhost:8080")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [data]);

  const onChangeTitle = useCallback((e) => {
    e.preventDefault();
    setTitles(e.currentTarget.value);
  }, []);

  const onChangeDesc = useCallback((e) => {
    e.preventDefault();
    setDesc(e.currentTarget.value);
  }, []);

  const card = { title: title, description: desc };

  const addList = () => {
    axios
      .post("http://localhost:8080/card", card)
      .then(() => {
        console.log("저장 성공");
      })
      .catch((err) => {
        console.log("애러발생", err.response.data);
      });
    console.log(card);
  };

  return (
    <Container>
      <InputGrid>
        <h1>나만의 할 일 !!</h1>
        <h2>제목</h2>
        <InputTitle
          ref={titleEl}
          type="text"
          value={title}
          onChange={onChangeTitle}
        />
        <h2>내용</h2>
        <InputDesc ref={descEl} value={desc} onChange={onChangeDesc} />
        <SaveButton onClick={addList}>저장하기</SaveButton>
      </InputGrid>
      <ListGrid>
        {data.map((v, i) => (
          <TodoList key={i} data={v} />
        ))}
      </ListGrid>
    </Container>
  );
};

const Container = styled.div`
  width: 70%;
  display: flex;
  margin: 40px auto;
  border: 1px solid;
  border-radius: 20px;
  background-color: #eeeeee;
`;
const InputGrid = styled.div`
  width: 50%;
  margin: 0px auto;
  text-align: center;
`;
const ListGrid = styled.div`
  width: 50%;
`;

const InputTitle = styled.input`
  width: 70%;
  height: 25px;
  font-size: 15px;
  margin: 10px auto;
`;

const InputDesc = styled.textarea`
  width: 70%;
  height: 200px;
  font-size: 14px;
  margin: 10px auto;
`;

const SaveButton = styled.button`
  width: 70%;
  height: 30px;
  margin: auto;
  background-color: #bf94e4;
  border: none;
  border-radius: 10px;
  color: #fff;
  font-weight: bold;
`;

export default Main;
