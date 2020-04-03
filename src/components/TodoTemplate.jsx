import React, { useEffect } from "react";
import styled from "styled-components";
import { useTodoDispatch } from "../TodoContext";

const TodoTemplateBlock = styled.div`
  width: 512px;
  height: 768px;

  position: relative;
  background: white;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

  margin: 0 auto;

  margin-top: 96px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
`;

const TodoTemplate = ({ children }) => {
  const dispatch = useTodoDispatch();
  const ss = sessionStorage;
  const arr = Array(ss.length).fill(null);
  console.log(arr);
  const send = arr.map((_, i) => ss.getItem(`todo${i + 1}`));
  console.log(send);
  useEffect(() => {
    send.map(v => dispatch({ type: "CREATE", todo: JSON.parse(v) }));
  }, [dispatch, send]);
  return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
};

export default TodoTemplate;
