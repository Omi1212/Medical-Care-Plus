import React, {useState, useEffect} from "react";
import "./calendar-reminder-modal.css";
import { gapi } from "gapi-script";
import { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

const CLIENT_ID = "571913446838-bk53bucgbqegq0glp266gfsqgo8gao1f.apps.googleusercontent.com";
const SCOPES = "https://www.googleapis.com/auth/calendar";
const API_KEY = "AIzaSyBs7K45R3eOwde9GWYzK2Rrsxg0f3WLT5w";
const DISCOVERY_DOCS = "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest";

const ReminderModal = () =>{
    
  let [value, onChangeValue] = useState(new Date());

  const [user, setUser] = useState({});
  const [tokenClient, setTokenClient] = useState({});

  let event = {
    'summary': 'Awesome Event!',
    'location': '800 Howard St., San Francisco, CA 94103',
    'description': 'Really great refreshments',
    'start': {
      'dateTime': value,
      'timeZone': 'America/Los_Angeles'
    },
    'end': {
      'dateTime': '2020-06-28T17:00:00-07:00',
      'timeZone': 'America/Los_Angeles'
    },
    'recurrence': [
      'RRULE:FREQ=DAILY;COUNT=2'
    ],
    'attendees': [
      {'email': 'lpage@example.com'},
      {'email': 'sbrin@example.com'}
    ],
    'reminders': {
      'useDefault': false,
      'overrides': [
        {'method': 'email', 'minutes': 24 * 60},
        {'method': 'popup', 'minutes': 10}
      ]
    }
  }

  function createEvent(){
    tokenClient.requestAccessToken();
  }

  useEffect(() => {
    const retrievedObject = JSON.parse(localStorage.getItem('user'));
    setUser(retrievedObject);

    setTokenClient(google.accounts.oauth2.initTokenClient({
      client_id: CLIENT_ID,
      scope: SCOPES,
      callback:(tokenResponse) => {
        console.log(tokenResponse);
        if (tokenClient && tokenResponse.access_token) {
          const request = gapi.client.calendar.events.insert({
            'calendarId': 'primary',
            'resource': event
          });
          
          request.execute(function(event) {
            appendPre('Event created: ' + event.htmlLink);
          });
        }
      }
    }));
    
  }, []);

  return(
    <div className="calendar-modal-content">
        <div className="modal-title">
            <h1>Reminders</h1>
        </div>
        <form>
            <div className="input-container">
                <label>Title: </label>
                <input type="text" className="title-input" placeholder="Type title"></input>
            </div>
            <div className="input-container">
                <label>Description: </label>
                <textarea className="description-area" type="text" placeholder="Type details of remainder"></textarea>
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
              <button onClick={createEvent} className="btn btn-save">Guardar</button>
              <button className="btn btn-cancel">Cancelar</button>
            </div>
        </form>
    </div>
  );
};

export default ReminderModal;