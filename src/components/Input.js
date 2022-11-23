import React, { useState } from "react";

function Input() {
  //getting dates
  const date = new Date();
  var day = date.getDate();
  var month = date.getMonth() + 1;
  var year = date.getFullYear();
  let newDate = year + "-" + month + "-" + day;

  // dob date function
  const dateOfBirth = (event) => {
    setDob(event.target.value);
  };
  // latest date function
  const latestDate = (event) => {
    setCurrDate(event.target.value);
  };
  // result function
  const getResult = () => {
    let dobDays = new Date(dob).getDate();
    let dobMonth = new Date(dob).getMonth() + 1;
    let dobYear = new Date(dob).getFullYear();

    let currDays = new Date(currDate).getDate();
    let currMonth = new Date(currDate).getMonth() + 1;
    let currYear = new Date(currDate).getFullYear();

    let year = currYear - dobYear;
    let month = currMonth - dobMonth;
    let day = currDays - dobDays;
    if (dobMonth > currMonth) {
      year--;
      month = 12 + currMonth - dobMonth;
    }
    if (dobDays > currDays) {
      month--;
      day = 31 + currDays - dobDays;
      if (month < 0) {
        month = 11;
        year--;
      }
    }
    if (day < 0) {
      day = 0;
    }
    if (month < 0) {
      month = 0;
    }
    if (year < 0) {
      year = 0;
    }
    if (currDate < dob) {
      setResult("Date of birth needs to be earlier than the age at date.");
    } else if (currDate === dob) setResult("Welcome to the Earth");
    else {
      let res = day + " Days: " + month + " Months: " + year + " Years";
      setResult(res);
    }
  };
  const [dob, setDob] = useState(newDate);
  const [currDate, setCurrDate] = useState(newDate);
  const [result, setResult] = useState("");
  return (
    <div className="text-light d-flex justify-content-center align-items-center flex-column container my-5">
      <h1 className="text-danger display-1">Age calculator </h1>
      <label htmlFor="">
        Enter Date of birth :
        <input type="date" value={dob} onChange={dateOfBirth} className='m-3 '/>
      </label>
     
      <label htmlFor="">
        Enter current Date :
        <input type="date" value={currDate} onChange={latestDate} className='m-3 '/>
      </label>
      <div className="btn btn-primary" onClick={getResult}>
        Calculate
      </div>
      <h3 className='m-3 text-warning'>{result}</h3>
    </div>
  );
}

export default Input;
