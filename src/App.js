import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { EntryPage } from "./pages/entry/EntryPage";
import DefaultLayout from "./layout/DefaultLayout";

function App() {
  return (
    <div className="App">
      {/* <EntryPage /> */}
      <DefaultLayout>Dashboard</DefaultLayout>
      <ToastContainer />
    </div>
  );
}

export default App;
