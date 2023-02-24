import React, {useReducer, useEffect} from "react";

function reducer(state, action) {
    switch (action.type) {
        case 'LOADING':
            return{
                loading: true,
                data: null,
                error: null
            };
        case 'SUCCESS':
            return{
                loading: false,
                data: action.data,
                error: null
            };
        case 'ERROR':
            return{
                loading: false,
                data: null,
                error: action.error
            };
        default:
            throw new Error(`${action.type} 예외발생!!`);
    }
}

function useAsync(callback, deps =  [], skip = false) {
    const [ state, dispatch ] = useReducer(reducer, {
        loading: false,
        data: null,
        error: null
    });

    // 컴포넌트를 가장 처음에 렌더링 할때에만 api를 호출하고
    // 상태에서 값에 변환이 발생했을때 나중에 데이터를 쉽게 리로딩을 하기위해 선언
    const fetchData = async () => {
        dispatch({ type: 'LOADING' });
        try {
            const data = await callback();
            dispatch({ type: 'SUCCESS', data });
        } catch (e) {
            dispatch({ type: 'ERROR', error: e });
        }
    };

    useEffect(() => {
        if (skip) return;
        fetchData();
    }, deps);
    return [state, fetchData];
}

export default useAsync;