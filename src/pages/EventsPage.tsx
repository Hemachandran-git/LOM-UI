import React, { JSX, useState } from "react";


function EventsPage():JSX.Element {
  const [exams] = useState([
    { id: 1, subject: "Math", date: "2025-09-20" },
    { id: 2, subject: "Computer Science", date: "2025-09-22" },
    { id: 3, subject: "Physics", date: "2025-09-25" },
  ]);

  return (
    <>
    <style>{`
      #page{
        padding: 2rem;
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        background: #f8f9fa;
        min-height: 100vh;
      }

      .page h2 {
        text-align: center;
        margin-bottom: 1.5rem;
        color: #2d3748;
      }

      .data-table {
        width: 100%;
        border-collapse: collapse;
        background: #fff;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        border-radius: 8px;
        overflow: hidden;
      }

      .data-table th,
      .data-table td {
        padding: 0.9rem 1rem;
        text-align: center;
        border-bottom: 1px solid #ddd;
      }

      .data-table th {
        background: #6c63ff;
        color: white;
        font-weight: bold;
      }

      .exam-row:hover {
        background-color: #f1f5ff;
        transition: 0.2s ease-in-out;
      }

      .exam-date {
        display: inline-block;
        padding: 0.3rem 0.8rem;
        border-radius: 12px;
        font-weight: bold;
        color: #1a202c;
        background: #edf2ff;
      }
    `}</style>
    <div className="page">
      <h2>📅 Exam Schedule</h2>
      <table className="data-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Subject</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {exams.map((e) => (
            <tr key={e.id} className="exam-row">
              <td>{e.id}</td>
              <td>{e.subject}</td>
              <td>
                <span className="exam-date">{e.date}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default EventsPage;
