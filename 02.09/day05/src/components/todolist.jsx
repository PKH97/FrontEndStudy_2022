import React from "react";
import styled from "styled-components";
import TodoItem from "./todoitem";
import { useTodoState } from "../context";

const TodoListBlock = styled.div`
    flex: 1;
    padding: 20px 32px;
    padding-bottom: 48px;
    overflow-y: auto;
    background: gray;
`;

function TodoList() {
    const todos = useTodoState();

    return(
        <TodoListBlock>
            {/* 
            <TodoItem text="프로젝트 생성하기" done="{false}"></TodoItem>
            <TodoItem text="컴포넌트 스타일링 하기" done="{true}"></TodoItem>
            <TodoItem text="Context 만들기" done="{true}"></TodoItem>
            <TodoItem text="기능 구현하기" done="{false}"></TodoItem>
            */}
            { todos.map(todo => (
                <TodoItem
                    key = { todo.id }
                    id = { todo.id }
                    text = { todo.text }
                    done = { todo.done }
                />
            )) }
        </TodoListBlock>
    );
}

export default TodoList;