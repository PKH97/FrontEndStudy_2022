import Resct, { useReducer, createContext, useContext } from "react"
// useReducer: 컴포넌트에 상태값을 분리하는 함수
// -> 생성 및 수정, 삭제등 상태값을 관리하기 위해서 리덕스 사용
// ContextApi: 자료를 전역 사용하는 함수
// 자료를 사용하는 범위 설정함수 : createContext()
// 자료를 직접 사용하게 연결 해주는 함수: useContext()

const items = [
    {
        id: 1,
        src: ' https://shoppingcdn.namyangi.com/attach/item/2022/202201/8ebae726-59b2-4817-a6c5-54bdbfc1abf0.jpg?71d3c51', 
        title: '[냉장]떠먹는 불가리스 복숭아',
        price: '1000원',
        act: true
    },
    {
        id: 2,
        src: ' https://shoppingcdn.namyangi.com/attach/item/2022/202201/8ebae726-59b2-4817-a6c5-54bdbfc1abf0.jpg?71d3c51', 
        title: '[냉장]떠먹는 불가리스 복숭아',
        price: '2000원',
        act: true
    },
    {
        id: 3,
        src: ' https://shoppingcdn.namyangi.com/attach/item/2022/202201/8ebae726-59b2-4817-a6c5-54bdbfc1abf0.jpg?71d3c51', 
        title: '[냉장]떠먹는 불가리스 복숭아',
        price: '3000원',
        act: false
    },
    {
        id: 4,
        src: ' https://shoppingcdn.namyangi.com/attach/item/2022/202201/8ebae726-59b2-4817-a6c5-54bdbfc1abf0.jpg?71d3c51', 
        title: '[냉장]떠먹는 불가리스 복숭아',
        price: '4000원',
        act: false
    },
    {
        id: 5,
        src: ' https://shoppingcdn.namyangi.com/attach/item/2022/202201/8ebae726-59b2-4817-a6c5-54bdbfc1abf0.jpg?71d3c51', 
        title: '[냉장]떠먹는 불가리스 복숭아',
        price: '1000원',
        act: true
    },
    {
        id: 6,
        src: ' https://shoppingcdn.namyangi.com/attach/item/2022/202201/8ebae726-59b2-4817-a6c5-54bdbfc1abf0.jpg?71d3c51', 
        title: '[냉장]떠먹는 불가리스 복숭아',
        price: '2000원',
        act: true
    },
    {
        id: 7,
        src: ' https://shoppingcdn.namyangi.com/attach/item/2022/202201/8ebae726-59b2-4817-a6c5-54bdbfc1abf0.jpg?71d3c51', 
        title: '[냉장]떠먹는 불가리스 복숭아',
        price: '3000원',
        act: false
    },
    {
        id: 8,
        src: ' https://shoppingcdn.namyangi.com/attach/item/2022/202201/8ebae726-59b2-4817-a6c5-54bdbfc1abf0.jpg?71d3c51', 
        title: '[냉장]떠먹는 불가리스 복숭아',
        price: '4000원',
        act: false
    }
]

// 액션을 관리하는 함수
function itemReducer(state, setState) {

}


// 범위를 설정하는 함수선언
const ItemStateContext = createContext();


export function ItemProvider({ children }) {
    // const [state, setState] = useState('초기값');
    const [state, setState] = useReducer(itemReducer, items);
    // [ 배열, 액션 ] = useReducer(액션을관리하는함수, 배열을가지고있는함수);

    return(
        <div>
            <ItemStateContext.Provider value={ state }>
                { children }
            </ItemStateContext.Provider>
        </div>
    );

}


// 전역데이터를 사용하도록 연결하는 함수
export function useItemState() {
    const context = useContext(ItemStateContext);

    // 예외처리
    if (!context) {
        throw new Error('TodoProvicer를 찾을 수 없음');
    }
    return context;
}