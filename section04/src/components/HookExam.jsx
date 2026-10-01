import useInputaaa from "./../hooks/useInput.jsx";

const HookExam = () => {
    const [input, onChange] = useInputaaa();
    const [input2, onChange2] = useInputaaa();
    return <div>
        <input value={input} onChange={onChange}/>
        <input value={input2} onChange={onChange2}/>
    </div>;
};

export default HookExam;