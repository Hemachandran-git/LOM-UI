import React from "react";
import { useNavigate} from "react-router-dom";
import { JSX, useState } from "react";

function Timetable(): JSX.Element {
  
    const [timetable] = useState([
    { day: "Monday", subject: "Math", time: "9:00 - 10:00" },
    { day: "Monday", subject: "Computer Science", time: "10:15 - 11:15" },
    { day: "Tuesday", subject: "Physics", time: "9:00 - 10:00" },
    { day: "Tuesday", subject: "English", time: "10:15 - 11:15" },
  ]);

  return (
    <div className="page">
      <h2>Class Timetable</h2>
      <table className="data-table">
        <thead>
          <tr>
            <th>Day</th>
            <th>Subject</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {timetable.map((slot, index) => (
            <tr key={index}>
              <td>{slot.day}</td>
              <td>{slot.subject}</td>
              <td>{slot.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    );
};
export default Timetable;