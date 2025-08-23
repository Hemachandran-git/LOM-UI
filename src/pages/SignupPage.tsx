import { useNavigate} from "react-router-dom";
import { JSX, useState } from "react";
import React from "react";

function SignupPage(): JSX.Element {
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const password = formData.get('password');
    console.log('Form submitted:', { name, email, password });
    };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault(); 
    }
  }
  const handleSignup = async (e : React.FormEvent) => {
    e.preventDefault();
    
  const payload = {
    name,
    email,
    password
  };

  if (!name || !email || !password) {
    setError('Please enter credentials');
    console.error(error);
    return;
  }
  setError(null);
  try{
  const response = await fetch('http://localhost:5000/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (response.ok) {
    localStorage.setItem("isAuthenticated","true");
       navigate('/dashboard');
    console.log('Signup successful');
  } else {
    console.error('Signup failed');
  }
} catch (error) {
  console.error(error);
  alert('Error connecting to server');
}  
};
  const handlelogin = () => {
    navigate('/login');
  };
  return (
    <>
      <style>{`
          #one {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background: linear-gradient(135deg, #dcd3ce, #c7c0bbff);
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          }
          #one h2 {
            font-size: 2rem;
            font-weight: bold;
            margin-bottom: 1.5rem;
            color: #333;
            text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
          }
          #one form {
            background: #fff;
            padding: 2rem;
            border-radius: 12px;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
            text-align: center;
            transition: transform 0.3s ease;
          }
          #one form:hover {
            transform: scale(1.02);
          }
            #one input[type="text"],
            #one input[type="email"],
            #one input[type="password"] {
              border: 1px solid #ccc;
              padding: 0.7rem;
              margin-bottom: 0.8rem;
              border-radius: 6px;
              width: 250px;
              outline: none;
              transition: all 0.3s ease;
              font-size: 0.95rem;
          }
            #one input[type="text"]:focus,
            #one input[type="email"]:focus,
            #one input[type="password"]:focus {
              border-color: #3b82f6;
              box-shadow: 0 0 8px rgba(59, 130, 246, 0.3);
          }
          #one button {
            background: linear-gradient(135deg, #3b82f6, #2563eb);
            color: white;
            margin-top: 0.8rem;
            padding: 0.7rem 1.8rem;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            font-weight: 600;
            font-size: 1rem;
            transition: all 0.3s ease;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
          }
          #one button:hover {
            background: linear-gradient(135deg, #2563eb, #1d4ed8);
            transform: translateY(-2px);
            box-shadow: 0 6px 14px rgba(0, 0, 0, 0.2);
          }
          #one .err {
            color: #e11d48;
            font-size: 0.9rem;
            margin-bottom: 0.5rem;
            font-weight: 500;
          }
      `}</style>
      <form id="from1" onSubmit={handleSubmit}>
      <div id="one" className="flex flex-col items-center justify-center min-h-screen" >
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        <input 
          type="text"
          placeholder="Enter name"
          className="border p-2 mb-2"
          onChange={(e)=> setName(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <input
          type="email"
          placeholder="xyz@gmail.com"
          className="border p-2 mb-2"
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <input
          type="password"
          placeholder="Enter your password"
          className="border p-2 mb-2"
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        {error && <p className="err">{error}</p>}
        <button type="submit" id="button1" onClick={handleSignup} >
          Submit 
        </button>
        <p>Already have an account?</p>
        <button  className="text-blue-500 hover:underline" onClick={handlelogin}>
          Login here
        </button>
        </div>
        </form>
        
    </>
  );
};

export default SignupPage;