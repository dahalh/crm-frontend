import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { EntryPage } from "./pages/entry/EntryPage";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { AddTicket } from "./pages/new-ticket/AddTicket";
import { TicketLists } from "./pages/ticket-list/TicketLists";
import { Ticket } from "./pages/ticket/Ticket";
import { PrivateRoute } from "./components/private-route/PrivateRoute";

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
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/add-ticket"
            element={
              <PrivateRoute>
                <AddTicket />
              </PrivateRoute>
            }
          />
          <Route
            path="/tickets"
            element={
              <PrivateRoute>
                <TicketLists />
              </PrivateRoute>
            }
          />
          <Route
            path="/ticket/:tid"
            element={
              <PrivateRoute>
                <Ticket />
              </PrivateRoute>
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
