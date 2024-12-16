import { useState } from "react";
import reactLogo from "./assets/react.svg";
import hexa from "/hexa.png";
import juicebox from "/juicebox.png";
import refreshBtn from "/refresh.svg";
import backBtn from "/back.svg";
import hexaPurple from "/hexa-purple.svg";
import { useNavigate } from "react-router-dom";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mode, setMode] = useState(1);
    const navigate = useNavigate()
  const handleNameChange = (e) => {
    setName(e.target.value); // Update the name state with input value
  };

  return (
    <div className=" flex gap-12 flex-col">
      <div className="flex flex-row justify-around items-center w-full">
        <div className="p-3 bg-slate-800 rounded-full cursor-pointer">
          <img src={backBtn} onClick={() => navigate('/about')} />
        </div>
        <img src={juicebox} alt="Logo" className="h-12" />
        <div className=" rounded-full cursor-pointer">
          <img src={refreshBtn} alt="Next Slide" onClick={() => navigate('/form')} />
        </div>
      </div>
      <div className=" justify-center flex items-center flex-col">
        <img src={hexaPurple} alt="" />
        <span className=" mt-7">
          {mode == 1
            ? "Let’s start with the basics. Type in your first name."
            : mode == 2
            ? "How should we contact you? Type in your email address."
            : `Thanks, ${name}! Now, it’s time to get a reality check. 
This will take 2-3 minutes. 
`}
        </span>
      </div>
      <div className="h-screen flex justify-center items-center">
        <div className="p-1 rounded border flex justify-between items-center text-center">
          {mode == 1 ? (
            <div className=" flex flex-row">
              <input
                className="bg-[#0C0D10] rounded-sm p-1"
                type="text"
                placeholder="First Name"
                onChange={handleNameChange}
                value={name}
              />
              <img
                src={backBtn}
                onClick={() => setMode(2)}
                className="rotate-90 p-1 rounded-full bg-slate-800"
                alt="Back Button"
              />
            </div>
          ) : mode == 2 ? (
            <div className=" flex flex-row">
              <input
                className="bg-[#0C0D10] rounded-sm p-1"
                type="text"
                placeholder="Email"
                onChange={(e) => {setEmail(e.target.value)}}
                value={email}
              />
              <img
                src={backBtn}
                onClick={() => setMode(3)}
                className="rotate-90 p-1 rounded-full bg-slate-800"
                alt="Back Button"
              />
            </div>
          ) : (
            <button className=" bg-slate-50 text-black px-10 py-4">Continue</button>
          )}
        </div>
      </div>
    </div>
  );
}
