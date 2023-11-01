// import { BrowserRouter , Routes, Route } from "react-dom"
import Main from "./comp/Main";
import Counter from "./comp/Counter";
function App() {
  return (
    <div>
        {/* <BrowserRouter>
        <Main />
        <Routes>
          <Route path="/home" element={<Counter />} />
        </Routes>
      </BrowserRouter>   */}
      <Main />
      <Counter />
     
    </div>

  );
}

export default App;
