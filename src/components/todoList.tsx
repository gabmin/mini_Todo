import React, { useEffect } from "react";
import { apis } from "../shared/api";
import { getData } from "../shared/api";

const TodoList = () => {
  useEffect(() => {
    apis.getList().then((res) => {
      console.log(res);
    });
  });
  return (
    <div>
      <div></div>
    </div>
  );
};

export default TodoList;
