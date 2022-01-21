import { Data } from "../shared/types";
import { FunctionComponent } from "react";
import styled from "styled-components";

const TodoList: FunctionComponent<{ data: Data }> = ({ data }) => {
  return (
    <Card>
      <TitleWrapper>{data.title}</TitleWrapper>
      <DescWrapper>{data.description}</DescWrapper>
      <FooterGrid>
        <div>
          <Button>완료하기</Button>
          <Button>삭제하기</Button>
        </div>
        <DateWrapper>{data.date.slice(0, 10)}</DateWrapper>
      </FooterGrid>
    </Card>
  );
};

export default TodoList;

const Card = styled.div`
  width: 90%;
  padding: 10px;
  border: 1px solid;
  border-radius: 5px;
  margin: 20px 0px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
`;

const TitleWrapper = styled.div`
  text-align: center;
  border: none;
  border-radius: 10px;
  background-color: #bed990;
  color: #fff;
  font-size: 16px;
`;

const DescWrapper = styled.div`
  margin: 10px 0px;
  text-align: center;
  padding: 10px;
  height: 100%;
  background-color: #06aa76;
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: 14px;
`;

const DateWrapper = styled.div`
  text-align: right;
`;

const FooterGrid = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  width: 70px;
  font-size: 12px;
  margin-right: 10px;
  background-color: #bf94e4;
  color: #fff;
  border: none;
  border-radius: 10px;
  font-weight: bold;
`;
