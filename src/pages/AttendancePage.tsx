import React, { JSX, useState } from "react";


interface Student {
  id: number;
  name: string;
  status: string;
}

function AttendancePage():JSX.Element {
  const [students, setStudents] = useState<Student[]>([
    { id: 1, name: "User1", status: "Present" },
    { id: 2, name: "User2", status: "Absent" },
    { id: 3, name: "User3", status: "Present" },
  ]);

  const toggleStatus = (id: number) => {
    setStudents((prev) =>
      prev.map((s) =>
        s.id === id
          ? { ...s, status: s.status === "Present" ? "Absent" : "Present" }
          : s
      )
    );
  };

  return (
    <>
    <style>{`
      #page { 
        padding: 2rem;
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        background: #f8f9fa;
        min-height: 100vh;
      }

      .page h2 {
        text-align: center;
        margin-bottom: 1.5rem;
        color: #333;
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
        padding: 0.8rem 1rem;
        text-align: center;
        border-bottom: 1px solid #ddd;
      }

      .data-table th {
        background: #007bff;
        color: white;
        font-weight: bold;
      }

      .data-table tr.present {
        background-color: #e8f9f0;
      }

      .data-table tr.absent {
        background-color: #fde8e8;
      }

      .status {
        padding: 0.3rem 0.7rem;
        border-radius: 12px;
        font-weight: bold;
      }

      .status.present {
        background-color: #d1fae5;
        color: #065f46;
      }

      .status.absent {
        background-color: #fee2e2;
        color: #991b1b;
      }

      button {
        padding: 0.4rem 1rem;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        font-weight: 500;
        transition: all 0.2s ease-in-out;
      }

      button:hover {
        transform: scale(1.05);
      }

      tr td button {
        background: #007bff;
        color: white;
      }

      tr.absent td button {
        background: #28a745; /* Show green when marking present */
      }
      `}</style>
    <div className="page">
      <h2>Attendance Tracking</h2>
      <table className="data-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s) => (
            <tr key={s.id} className={s.status === "Present" ? "present" : "absent"}>
              <td>{s.id}</td>
              <td>{s.name}</td>
              <td>
                <span className={`status ${s.status.toLowerCase()}`}>
                  {s.status}
                </span>
              </td>
              <td>
                <button onClick={() => toggleStatus(s.id)}>
                  Mark {s.status === "Present" ? "Absent" : "Present"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default AttendancePage;
