import "./Editor.css";
import {useState, useRef} from "react";
const Editor = ({onCreate}) =>{
    const [content, setContent] = useState("");
    const contentRef = useRef();
    const onKeyDown =  (e) => {
        if(e.keyCode===13){
            onSubmit();
        }
    }
    const onSubmit=()=>{
        if(content===""){
            contentRef.current.focus();
            return;
        }
        onCreate(content);
        setContent("");
    }
    const onChangeContent = (e)=>{
        setContent(e.target.value);
    };
    return(
        <div className="Editor">
            <input onKeyDown={onKeyDown} ref={contentRef} value={content} onChange={onChangeContent} placeholder="새로운 ToDo..."></input>
            <button onClick={onSubmit}>추가</button>
        </div>
    );
};

export default Editor;