import React, {useState} from "react";
import styled, {css} from "styled-components";
import { MdAdd } from "react-icons/md";
import { useTodoDispatch, useTodoNextId } from "../context";

const InsertFormPositioner = styled.div`
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: #ccc;
`;

const CircleButton = styled.button`
    background-color: #38d9a9;
    &:hover{
        background: #63e6be;
    }

    width: 80px;
    height: 80px;
    display: block;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    bottom: 0px;
    transform: translate(-50%, 50%);

    border: none;
    outline: none;
    font-size: 60px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;

    transtorm: 0.125s all ease-in;

    ${props => props.open && css`
        background-color: #ff6b6b;
        &:hover {
            background: #ff8787;
        }
        &:active {
            background: #fa5252;
        }
        transtorm: translate(-50%, 50%) rotate(45deg);
    `}
`;

const InserForm = styled.form`
    background: #f8f9fa;
    padding: 32px 32px 72px 32px;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    border-top: 1px solid #e9ecef;
`;

const Input = styled.input`
    padding: 12px;
    border-radius: 4px;
    border: 1px solid #dee2e6;
    width: 100%;
    outline: none;
    font-size: 18px;
    box-sizing: border-box;
`;


function TodoCreate() {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(''); //Input컴포넌트에 value값을 공백으로 초기값 설정
    
    const dispatch = useTodoDispatch();
    const nextId = useTodoNextId(); //nextID => 5
    
    const onToggle = () => { setOpen(!open) }
    const onChange = e => setValue(e.target.value);
    const onSubmit = e => {
        e.preventDefault(); //서버로 데이터를 전송하는 기능을 막음(새로고침x)
        dispatch({ 
            type: 'CREATE', todo: {
                id: nextId.current,
                text: value,
                done: false
            }
        });
        //input 공백으로 재설정 
        setValue('');
        // 입력하는 컴포넌트 입력후 자동으로 숨김
        setOpen(false);
        // 다음에 입력될 배열요소 아이디값 설정
        nextId.current += 1;
    };

    //open이 참이면 ()렌더링이 되게함
    return(            
        <> { open && ( 
            <InsertFormPositioner>
                <InserForm onSubmit={onSubmit}>
                    <Input autoFocus placeholder="할 일을 입력 후, Enter를 누르세요." 
                        onChange={onChange} value={value} />
                </InserForm>
            </InsertFormPositioner>
            )}
            <CircleButton onClick={onToggle} open={open}><MdAdd /></CircleButton>
        </>
    );
}

export default TodoCreate;