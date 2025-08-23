
export default function Courses() {
    return (
    <>
    <style>{`
          #one {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; /* changed "top" to correct flex value */
  background: linear-gradient(135deg, #ece9e6, #ffffff);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  padding: 2rem;
}

#one h2 {
  font-size: 2.2rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #2c3e50;
}

#one p {
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  color: #555;
}

/* Grid for dashboard boxes */
#one .course-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
  width: 100%;
  max-width: 1000px;
  padding: 0 1rem;
}

/* Each box */
.dashboard-box {
  border: 1px solid #e2e8f0;
  padding: 2rem 1.2rem;
  background: #ffffff;
  border-radius: 12px;
  text-align: center;
  font-weight: 500;
  font-size: 1rem;
  color: #333;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  cursor: pointer;
}

/* Hover effect */
.dashboard-box:hover {
  transform: translateY(-6px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  border-color: #3b82f6;
}

/* Optional animation on load */
.dashboard-box {
  animation: fadeInUp 0.6s ease forwards;
  opacity: 0;
}

@keyframes fadeInUp {
  0% {
    transform: translateY(20px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

        `}</style>
        <div id="one">
            <h2>Courses</h2>
            <p>Here you can find various courses listed</p>
            <p>Click on a course that you intrested to view the details</p>
            <p>Courses will be updated regularly</p>
            <div id ="course-list">
                <div className="dashboard-box">Course 1 : Introduction to Programming</div>
                <div className="dashboard-box">Course 2 : Web Development Basics</div>
                <div className="dashboard-box">Course 3 : Data Science Fundamentals</div>
                <div className="dashboard-box">Course 4 : Data Structures and Algorithms</div>
            </div>
        </div>
</>

);
}