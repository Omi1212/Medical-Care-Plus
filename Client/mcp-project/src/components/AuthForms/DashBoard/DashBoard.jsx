import React, {useState, useEffect} from "react";
import Modal from "react-modal"
import Card from "./ReminderCard/ReminderCard";
import AddReminderCard from "./AddReminderCard/AddReminderCard";
import "./AddReminderCard/add-reminder-card.css";
import ReminderModal from "./ReminderModal/ReminderModal";
import "./reminders-container.css";
import Header from "./HeaderDashboard/HeaderDashboard";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

Modal.setAppElement("#root");

const DashBoard = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div>
    <ToastContainer />
    <Header/>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <ReminderModal/>
      </Modal>
      <div className="dashboard">
        <label className="reminder-title">Reminders...</label>
        <div className="reminder-container">
          <div className="reminder-container-grid">
            <Card />
            <div
              className="add-reminder-card"
              onClick={() => setModalIsOpen(true)}
            >
              <i class="fi fi-rr-plus"></i>
              {/* <AddReminderCard /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
