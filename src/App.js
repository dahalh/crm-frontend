import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { EntryPage } from "./pages/entry/EntryPage";
import DefaultLayout from "./layout/DefaultLayout";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { AddTicket } from "./pages/new-ticket/AddTicket";
import { TicketLists } from "./pages/ticket-list/TicketLists";
import { Ticket } from "./pages/ticket/Ticket";

function App() {
  return (
    <div className="App">
      {/* <EntryPage /> */}
      <DefaultLayout>
        {/* <Dashboard /> */}
        {/* <AddTicket /> */}
        {/* <TicketLists /> */}
        <Ticket />
      </DefaultLayout>
      <ToastContainer />
    </div>
  );
}

export default App;
