import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { EntryPage } from "./pages/entry/EntryPage";
import DefaultLayout from "./layout/DefaultLayout";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { AddTicket } from "./pages/new-ticket/AddTicket";
import { TicketLists } from "./pages/ticket-list/TicketLists";
import { Ticket } from "./pages/ticket/Ticket";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <DefaultLayout> */}
          <Route path="/" element={<EntryPage />} />
          <Route
            path="/dashboard"
            element={
              <DefaultLayout>
                <Dashboard />
              </DefaultLayout>
            }
          />
          <Route
            path="/add-ticket"
            element={
              <DefaultLayout>
                <AddTicket />
              </DefaultLayout>
            }
          />
          <Route
            path="/tickets"
            element={
              <DefaultLayout>
                <TicketLists />
              </DefaultLayout>
            }
          />
          <Route
            path="/ticket/:tid"
            element={
              <DefaultLayout>
                <Ticket />
              </DefaultLayout>
            }
          />
          {/* </DefaultLayout> */}
        </Routes>
        <ToastContainer />
      </Router>
    </div>
  );
};

export default App;
