import "./App.css";
import ReactSyntaxHighlight from "./components/ReactSyntaxHighlight";
import { codes } from "./assets/codes";

function App() {
  return (
    <div className="bg-c-dark sm:px-0 px-5 pb-4 min-h-screen">
      <header className="bg-atomOneDark text-xl text-white text-center mb-4 py-2 font-semibold shadow-md">
        DSA Code Solution
      </header>
      <div className="sm:w-10/12 w-full  m-auto ">
        {codes.map((code, index) => (
          <ReactSyntaxHighlight index={index} code={code} key={index} />
        ))}
      </div>
    </div>
  );
}

export default App;
