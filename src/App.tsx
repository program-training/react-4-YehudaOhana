import Grandpa from "./components/Grandpa/Grandpa";
import TextContext from "./context/textContext";

const App = () => {
  return (
    <TextContext>
      <Grandpa />
    </TextContext>
  );
};

export default App;
