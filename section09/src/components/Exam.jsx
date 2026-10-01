import {useReducer} from "react";

function reducer2(state, action){
    console.log(state, action);
    switch(action.type){
        case "INCREASE2":
            return state + action.data;
        case "DECREASE":
            return state - action.data;
        default:
            return state;
    }
}


const Exam = () => {
    const [state, dispatch2] = useReducer(reducer2, 0);

    const onClickPlus=()=>{
        dispatch2({
            type:"INCREASE2",
            data:1

        });
    }
    return (
        <div>
            <h1>{state}</h1>
            <button onClick={onClickPlus}>+</button>
        </div>
    );
}

export default Exam;