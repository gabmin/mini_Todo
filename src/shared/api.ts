import axios from "axios";

export interface getData {
  id: number;
  title: string;
  description: string;
}

const api = axios.create({
  baseURL: "https://localhost:8080",
  withCredentials: true,
});

export const apis = {
  //캘린더 목록 가져오기
  getList: () => api.get("/"),

  //   // 게시물 작성하기
  //   addCard: () => api.post("/todo_list", post),

  //   // 게시물 수정하기
  //   updateCard: (id, title) => api.put("/todo_list", { id, title }),

  //   // 게시물 삭제하기
  //   deleteCard: (id) => api.delete("/todo_list", id),
};
