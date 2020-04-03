import React, { useEffect } from "react";
import { createGlobalStyle } from "styled-components";
import { TodoTemplate, TodoHead, TodoList, TodoCreate } from "./components";
import TodoProvider from "./TodoContext";

const GlobalStyle = createGlobalStyle`
body {
  background: #e9ecef;
}
`;

function App() {
  return (
    <TodoProvider>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </TodoProvider>
  );
}

export default App;
