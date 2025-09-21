import { NavLink , Link } from "react-router-dom";

 const navItems = [
              { title: "Meetings", path: "/meetings" },
              { title: "Attendance", path: "/attendance" },
              { title: "Grade", path: "/grades" },
              { title: "Events & Occasions", path: "/events" },
              { title: "TimeTable", path: "/timetable" }
            ];

function Dashboard() {
  return (
    <>
      <style>
  {`
    #dashboard-container {
      padding: 1.5rem;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: linear-gradient(135deg, #f9fafb, #e5e7eb);
      min-height: 100vh;
      color: #333;
    }

    /* Header */
    #dashboard-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #ffffff;
      padding: 1rem 1.5rem;
      border-radius: 12px;
      box-shadow: 0 4px 8px rgba(0,0,0,0.05);
      margin-bottom: 2rem;
    }

    #dashboard-logo {
      font-size: 1.4rem;
      font-weight: 700;
      color: #2563eb;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    /* Navigation */
    #dashboard-nav {
      display: flex;
      gap: 1.5rem;
    }

    #dashboard-nav a {
      text-decoration: none;
      color: #374151;
      font-weight: 500;
      transition: color 0.3s, transform 0.2s;
      position: relative;
    }

    #dashboard-nav a:hover {
      color: #2563eb;
      transform: translateY(-2px);
    }

    /* Section Title */
    #dashboard-section {
      margin: 1.5rem 0;
    }

    #dashboard-section h2 {
      font-size: 1.5rem;
      font-weight: 600;
      color: #111827;
    }

    /* Description box */
    #dashboard-desc {
      background: #f3f4f6;
      height: 6rem;
      width: 100%;
      margin: 1rem 0 2rem 0;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.1rem;
      font-weight: 500;
      color: #4b5563;
      box-shadow: inset 0 2px 6px rgba(0,0,0,0.05);
    }

    /* Dashboard Grid */
    #dashboard-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 1.5rem;
    }

    .dashboard-box {
      border: none;
      padding: 2rem 1.5rem;
      background: #ffffff;
      border-radius: 16px;
      text-align: center;
      font-weight: 500;
      box-shadow: 0 4px 12px rgba(0,0,0,0.08);
      transition: transform 0.2s, box-shadow 0.3s;
      cursor: pointer;
    }

    .dashboard-box:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 20px rgba(0,0,0,0.12);
    }

    /* Floating Chatbot */
    #dashboard-chatbot {
      position: fixed;
      bottom: 1.5rem;
      right: 1.5rem;
      border: none;
      border-radius: 50%;
      width: 5rem;
      height: 5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, #2563eb, #3b82f6);
      font-weight: 600;
      color: #000000ff;
      font-size: 1.2rem;
      box-shadow: 0 4px 12px rgba(0,0,0,0.2);
      cursor: pointer;
      transition: transform 0.2s;
    }

    #dashboard-chatbot:hover {
      transform: scale(1.1);

      background: linear-gradient(135deg, #1d4ed8, #2563eb);
    }
  `}
</style>

      <div id="dashboard-container">
        <header id="dashboard-header">
          <div id="dashboard-logo">
            <img src="/favicon.ico" alt="Logo" className="LOM" width='125'height='125' />
          </div>
          <nav id="dashboard-nav">
             <Link to="/dashboard">Home</Link>
             <Link to="/Courses">Courses</Link>
             <Link to="/who-we-are">Who are we</Link>
             <Link to="/contact-us">Contact Us</Link>
             <Link to="/profile">Profile</Link>
          </nav>
        </header>

        <section id="dashboard-section">
          <h2>Who are we?</h2>
          <div id="dashboard-desc">
            <p>We are a passionate team committed to transforming education with technology. Our software is designed as a comprehensive tool for schools and colleges, helping institutions manage academic and administrative tasks seamlessly.
              By integrating features like attendance tracking, homework management, digital notes, and teacher-student collaboration, we provide a unified platform that reduces manual work and enhances productivity.
              Our mission is simple: to empower educators and students with tools that streamline workflows, encourage learning, and build a connected academic community.</p>
          </div>
        </section>
       
        <div id="dashboard-grid">
          {navItems.map((item) => (
        <NavLink key={item.path} to={item.path} className="dashboard-box">
          {item.title}
        </NavLink>
      ))}
        </div>

         <div id="dashboard-chatbot">
          Chat Bot
        </div>
        
      </div>
    </>
  );
}

export default Dashboard;
