import { useEffect } from "react";
import { createCard, getCards } from "./api/cards";

function App() {
  useEffect(() => {
    getCards();
  }, []);
  return <div className="App">123</div>;
}

export default App;
