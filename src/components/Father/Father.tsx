import { useContext, useState } from "react";
import Child from "../Child/Child";
import { TextContext } from "../../context/textContext";

const Father = () => {
  const textContext = useContext(TextContext);
  const [input, setInput] = useState("");
  const handleSetText = () => {
    if (textContext?.setText) {
      textContext.setText(input);
    }
  };
  return (
    <>
      <Child />
      <input type="text" onChange={(e) => setInput(e.target.value)} value={input} />
      <button onClick={handleSetText}>Update state</button>
    </>
  );
};

export default Father;
