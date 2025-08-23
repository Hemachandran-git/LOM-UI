import { JSX,useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage(): JSX.Element {
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault(); 
      const formData = new FormData(e.currentTarget);
      const email = formData.get('email');
      const password = formData.get('password');
      console.log('Form submitted:', {email, password});
      };
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        e.preventDefault(); 
      }
    }
    const handleLogin = async () => {    
    const payload = {
      email,
      password
    };
    if (!email || !password) {
      setError('Please enter credentials');
      console.error(error);
      return;
    };
    setError(null);

    try{
    const response = await fetch('http://localhost:5000/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      console.log('Login successful');
    } else {
      console.error('Login failed');
    }
  } catch (error) {
    console.error(error);
    alert('Error connecting to server');
  }
      navigate('/dashboard');

};    

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
  return (
    <>
    <style>{`
          #one {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #d9d3cf, #c7c0bbff);
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        #one h2 {
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 1.2rem;
          color: #333;
        }
          #one input[type="email"],
          #one input[type="password"] {
            border: 1px solid #ccc;
            padding: 0.6rem;
            margin-bottom: 0.7rem;
            border-radius: 6px;
            width: 230px;
            font-size: 0.95rem;
            transition: all 0.3s ease;
          }
            #one input[type="email"]:focus,
            #one input[type="password"]:focus {
              border-color: #3b82f6;
              box-shadow: 0 0 6px rgba(59, 130, 246, 0.4);
              outline: none;
            }
          #one button {
            background: linear-gradient(135deg, #3b82f6, #2563eb);
            color: white;
            margin-top: 0.6rem;
            padding: 0.6rem 1.5rem;
            border: 1px solid black;
            border-radius: 6px;
            cursor: pointer;
            font-weight: 600;
            font-size: 1rem;
            transition: all 0.3s ease;
            box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15);
          }
        #one button:hover {
          background:   linear-gradient(135deg, #2563eb, #1d4ed8); 
          transform: translateY(-2px);
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        }
          #one .err {
            color: #e11d48;
            font-size: 0.9rem;
            margin-bottom: 0.5rem;
            font-weight: 500;
          }
      `}</style>
      <form className="flex flex-col" onSubmit={handleSubmit}>
    <div className="flex flex-col items-center justify-center min-h-screen" id ="one">
      <h2 className="text-2xl font-bold mb-2">Log in</h2>
      <input
        type="email"
        placeholder="xyz@gmail.com"
        value={email}
        onChange={e => setEmail(e.target.value)}
        onKeyDown={handleKeyDown}
        className="border px-2 py-1 mb-2"
      />
      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        className="border px-2 py-1 mb-2"
        onChange={e => setPassword(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      {error && <p className="err">{error}</p>}
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={handleLogin}>
        Submit
        </button>
    </div>
    </form>
  </>
  );
};


export default LoginPage;