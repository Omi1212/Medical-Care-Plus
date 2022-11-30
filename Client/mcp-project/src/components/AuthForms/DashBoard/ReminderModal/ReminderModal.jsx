import React, {useState, useEffect} from "react";
import "./calendar-reminder-modal.css";
import { gapi } from "gapi-script";
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

import { ToastContainer, toast } from 'react-toastify';

const CLIENT_ID = "571913446838-bk53bucgbqegq0glp266gfsqgo8gao1f.apps.googleusercontent.com";
const SCOPES = "https://www.googleapis.com/auth/calendar";
const API_KEY = "AIzaSyBs7K45R3eOwde9GWYzK2Rrsxg0f3WLT5w";
const DISCOVERY_DOC = "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest";

const ReminderModal = () =>{
  
  const notify = () => toast("Reminder created successfully!");
  let [value, onChangeValue] = useState(new Date());
  // let [Endvalue, onChangeEndValue] = useState(new Date());
  let [eventTitle,changeEventTitle] = useState("");
  let [eventDescription, changeDescription] = useState("");
  let [supervisorEmail,changeSupervisorEmail] = useState("");

  const [user, setUser] = useState({});
  const [tokenClient, setTokenClient] = useState({});

  let gapiInited = false;
  let gisInited = false;

  let event = {
    'summary': eventTitle,
    'location': 'Medical Care Plus',
    'description': eventDescription,
    'start': {
      'dateTime': value,
      'timeZone': 'America/Los_Angeles'
    },
    'end': {
      'dateTime': value,
      'timeZone': 'America/Los_Angeles'
    },
    'attendees': [
      {'email': supervisorEmail},
    ],
    'reminders': {
      'useDefault': false,
      'overrides': [
        {'method': 'email', 'minutes': 24 * 60},
        {'method': 'popup', 'minutes': 10}
      ]
    }
  };

  function handleClick(e){
    e.preventDefault();
    tokenClient.requestAccessToken();
      tokenClient.callback = async (resp) => {
        if (resp.error !== undefined) {
          throw (resp);
        }
        await createEvent();
      };

      if (gapi.client.getToken() === null) {
        // Prompt the user to select a Google Account and ask for consent to share their data
        // when establishing a new session.
        tokenClient.requestAccessToken({prompt: 'consent'});
      } else {
        // Skip display of account chooser and consent dialog for an existing session.
        tokenClient.requestAccessToken({prompt: ''});
      }

    changeEventTitle("");
    changeDescription("");
    changeSupervisorEmail("");
    onChangeValue(new Date());
  }

  async function createEvent(){
    try {
      gapi.client.load('calendar', 'v3', function() {
          const request = gapi.client.calendar.events.insert({
            'calendarId': 'primary',
            'resource': event
          });
          request.execute(function(event) {
            //appendPre('Event created: ' + event.htmlLink);
          });
      });
      notify();
    } catch (error) {
      console.log(error); 
      return;
    }
  }

  async function initializeGapiClient() {
    await gapi.client.init({
      apiKey: API_KEY,
      discoveryDocs: [DISCOVERY_DOC],
    });
    gapiInited = true;
  }

  function handleSignoutClick() {
    const token = gapi.client.getToken();
    if (token !== null) {
      google.accounts.oauth2.revoke(token.access_token);
      gapi.client.setToken('');
    }
  }


  useEffect(() => {
    const retrievedObject = JSON.parse(localStorage.getItem('user'));
    setUser(retrievedObject);

    gapi.load('client','calendar', 'v3', [initializeGapiClient]);
    //gapiLoaded
     setTokenClient(google.accounts.oauth2.initTokenClient({
      client_id: CLIENT_ID,
      scope: SCOPES,
      callback: '', // defined later
    }));
    gisInited = true;
    //gisLoaded
    
    // setTokenClient(google.accounts.oauth2.initTokenClient({
    //   client_id: CLIENT_ID,
    //   scope: SCOPES,
    //   callback:(tokenResponse) => {
    //     console.log(tokenResponse);
    //     if (tokenClient && tokenResponse.access_token) {
    //       const request = gapi.client.calendar.events.insert({
    //         'calendarId': 'primary',
    //         'resource': event
    //       });
          
    //       request.execute(function(event) {
    //         appendPre('Event created: ' + event.htmlLink);
    //       });
    //     }
    //   }
    // }));
    
  }, []);

  return(
    <div className="calendar-modal-content">
        <div className="modal-title">
            <h1>Reminders</h1>
        </div>
        <form>
            <div className="input-container">
                <label>Reminder: </label>
                <input type="text" className="title-input" placeholder="Type title" value={eventTitle} onChange={(event) => {changeEventTitle(event.target.value)}}></input>
            </div>
            <div className="input-container">
                <label>Description: </label>
                <textarea className="description-area" type="text" placeholder="Type details of remainder" value={eventDescription} onChange={(event) => {changeDescription(event.target.value)}}></textarea>
            </div>
            <div className="input-container">
                <label>Supervisor/Family email: </label>
                <input type="text" className="title-input" placeholder="Type title" value={supervisorEmail} onChange={(event) => {changeSupervisorEmail(event.target.value)}}></input>
            </div>
            <div className="calendar-container">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Date"
                  value={value}
                  onChange={(newValue) => {
                    onChangeValue(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
              <TimePicker
                label="Hour"
                value={value}
                onChange={(newValue) => {
                  onChangeValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
            </div>
            <div className="btn-container">
              <button onClick={handleClick} className="btn btn-save" type="submit">Guardar</button>
              <button className="btn btn-cancel">Cancelar</button>
            </div>
        </form>
    </div>
  );
};

export default ReminderModal;