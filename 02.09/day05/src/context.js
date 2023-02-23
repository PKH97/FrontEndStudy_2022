import React, {useReducer, createContext, useContext, useRef}  from "react";
const initialTodos = [
    {
        id: 1,
        text: '프론트엔드 프로젝트 만들기',
        done: false
    },
    {
        id: 2,
        text: '밥 발 챙겨먹기',
        done: false
    },
    {
        id: 3,
        text: '운동하기',
        done: false
    },
    {
        id: 4,
        text: '일기쓰기',
        done: false
    }
]

function todoReducer(state, action) {
    switch(action.type) {
        case 'CREATE':
            return state.concat(action.todo);
        case 'TOGGLE':
            return state.map(todo => 
                todo.id === action.id ? { ...todo, done: !todo.done } : todo
            );
        case 'REMOVE':
            return state.filter(todo => todo.id !== action.id);
        default: 
            throw new Error(`${action.type}이 잘못 전달됨`);
    }
}

const TodoStateContext = createContext(); //배열랜더링 상태컴포넌트
const TodoDispatchContext = createContext(); //배열편집하는 상태컴포넌트
const TodoNextIdContext = createContext(); // 배열추가하는 상태컴포넌트

export function TodoProvider({Children}) {
    const [state, dispatch] = useReducer(todoReducer, initialTodos);
    const nextId = useRef(5);

    return(
        <div>
            <TodoStateContext.Provider value={state}>
                <TodoDispatchContext.Provider value={dispatch}>
                    <TodoNextIdContext.Provider value={nextId}>
                        {Children}
                    </TodoNextIdContext.Provider>
                </TodoDispatchContext.Provider>
            </TodoStateContext.Provider>
        </div>
    );   
}

export function useTodoState() {
    const context = useContext(TodoStateContext);
    if(!context) {
        throw new Error('TodoProvider를 찾을 수 없음');
    }
    return context;
}

export function useTodoDispatch() {
    const context = useContext(TodoDispatchContext);
    if(!context) {
        throw new Error('TodoProvider를 찾을 수 없음');
    }
    return context;
}

export function useTodoNextId() {
    const context = useContext(TodoNextIdContext);
    if(!context) {
        throw new Error('TodoProvider를 찾을 수 없음');
    }
    return context;
}



// ContextAPI => 자료 전역으로 사용하기 위한 함수
// createContext()
// useContext()