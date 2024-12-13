import { useState } from "react";
import reactLogo from "./assets/react.svg";
import hexaText from "/hexagon-text.svg";
import juicebox from "/juicebox.png";
import refreshBtn from '/refresh.svg';
import backBtn from '/back.svg';
import { useNavigate } from "react-router-dom";
import "./App.css";

function App() {
  const navigate = useNavigate()
  const [count, setCount] = useState(0);

  return (
    <div className="">
      <div className=" flex justify-center items-center flex-col gap-12">
        <div className=" flex flex-row justify-around items-center w-full">
        <div >
            <img src={backBtn} className=" hidden" alt="" />
          </div>
          <img src={juicebox} alt="" className=" h-12" />
          <div className=" p-3 bg-slate-800 cursor-pointer rounded-full">
            <img src={refreshBtn} alt="" onClick={() => navigate('/')} />
          </div>
        </div>
        <img src={hexaText} alt="" />
        <span className=" text-2xl">
          Compare your thoughts on <span className=" text-purple-600">technology</span> with current industry opinions.
        </span>
        <button onClick={() => navigate('/about')} className=" bg-purple-300 text-black py-5 px-12 rounded-md font-semibold">Get a reality check</button>
      </div>
    </div>
  );
}

export default App;
