import React from "react";
import styled, {css} from "styled-components";
import { MdDone, MdDelete } from "react-icons/md";
import { useTodoDispatch } from "../context";

const Remove = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #dee2e6;
    font-size: 24px;
    cursor: pointer;
    &:hover{
        color: #ff6b6b;
    }
    display: none;
`;

const TodoItemBlock = styled.div`
    display: flex;
    align-items: center;
    padding-top: 12px;
    padding-bottom: 12px;
    // &는 현재 컴포넌트 의미(=this)
    &:hover{
        ${Remove}{
            display: initial;
        }
    }
    // 컴포넌트 선택이라는 기능 -> TodoItemBlock위에 마우스 커서가 있을때
    // Remove 컴포넌트를 보여주라는 의미(초기값으로는 ???)
`;

const CheckCircle = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 16px;
    border: 1px solid #ced4da;
    font-size: 24px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;

    // props가 참일때만 스타일 적용
    ${props => 
        props.done &&
        css`
        border: 1px solid #38d9a9;
        color: #38d9a9;`};
`;

const Text = styled.div`
    flex: 1;
    font-size: 21px;
    color: #495057;
    
    ${props => 
        props.done &&
        css`
        color: #38d9a9;`};
`;


function TodoItem({ id, done, text }) {
    const dispatch = useTodoDispatch();
    const onToggle = () => dispatch({type: 'TOGGLE', id});
    const onRemove = () => dispatch({type: 'REMOVE', id});

    return(            
        <TodoItemBlock>
            <CheckCircle done={done} onClick={onToggle}>{done && <MdDone />}</CheckCircle>
            <Text>{text}</Text>
            <Remove onClick={onRemove}><MdDelete /></Remove>
        </TodoItemBlock>
    );
}

export default TodoItem;