import { Data } from "../shared/types";

const TodoList: React.FunctionComponent<Data> = (props) => {
  return (
    <div>
      <div>{props}</div>
    </div>
  );
};

export default TodoList;
