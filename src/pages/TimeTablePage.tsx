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
    <>
    <style>{`
      .timetable-page {
        padding: 2rem;
        background: #f8fafc;
        min-height: 100vh;
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      }

      .timetable-title {
        text-align: center;
        font-size: 2rem;
        font-weight: 700;
        margin-bottom: 2rem;
        color: #2563eb;
      }

      .timetable-table {
        width: 80%;
        margin: 0 auto;
        border-collapse: collapse;
        background: #fff;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.08);
      }

      .timetable-table th,
      .timetable-table td {
        border: 1px solid #e5e7eb;
        padding: 1rem;
        text-align: center;
        font-size: 1rem;
      }

      .timetable-table th {
        background: #2563eb;
        color: #fff;
        font-weight: 600;
        text-transform: uppercase;
      }

      .timetable-table tr:nth-child(even) {
        background: #f9fafb;
      }

      .timetable-table tr:hover {
        background: #e0f2fe;
        transition: background 0.3s ease-in-out;
      }

    `}</style>
        <div className="timetable-page">
      <h2 className="timetable-title">Class Timetable</h2>
      <table className="timetable-table">
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
    </>
    );
};
export default Timetable;