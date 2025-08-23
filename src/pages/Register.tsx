import { useNavigate} from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const handleRegister =()=> {
    navigate('/signupPage');
  }
    return(
        <>
        <style>{`
          #one {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background: #ffffffff;
          }
          #one h2 {
            font-size: 3rem;
            font-weight: bold;
            margin-bottom: 1rem;
            padding: 1rem;
            align-items: top;

          }
          #two{
            display: flex;
            flex-direction: row;
            gap: 20px;
            align-items: center;
            justify-content: center;
          } 
          # two button {
             background: #ffffffff;
            margin-top: 0.5rem;
            padding: 0.5rem 1.5rem;
            border: black 1px solid;
            border-radius: 4px;
            cursor: pointer;
            font-weight: 500;
          }
            #two button:hover {
            background: #cbd5e1;
            }
               
        `}</style>
        <div className="flex items-center justify-between border-b p-4" id="one">
        <div>
            <h2>Register as</h2>
            <div className="flex space-x-4 items-center" id="two">
                <div>
                    <button onClick={handleRegister}>As Student </button>
                </div>
            <div>
                <button onClick={handleRegister}>As Teacher</button>
            </div>
            </div>
        </div>
        </div>
        </>
    );
}

export default Register;