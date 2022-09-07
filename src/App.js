import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { EntryPage } from "./pages/entry/EntryPage";

function App() {
  return (
    <div className="App">
      <EntryPage />
      <ToastContainer />
    </div>
  );
}

export default App;
