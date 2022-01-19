import { Data } from "../shared/types";
import { FunctionComponent } from "react";
import styled from "styled-components";

const TodoList: FunctionComponent<{ data: Data }> = ({ data }) => {
  return (
    <Card>
      <TitleWrapper>{data.title}</TitleWrapper>
      <div>{data.description}</div>
      <div>{data.title}</div>
    </Card>
  );
};

export default TodoList;

const Card = styled.div`
  width: 100%;
  border: 1px solid;
  border-radius: 5px;
  margin: 20px 0px;
  display: flex;
  flex-direction: column;
`;

const TitleWrapper = styled.div`
  text-align: center;
`;
