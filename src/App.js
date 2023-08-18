import { useState } from "react";
import Color from "./changeColor/Color";
import TextToImage from "./textToimage/TextToImage";

function App() {
  const [changeColor, setChagneColor] = useState("#C51605");
  return (
    <div className="min-h-screen">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-6xl leading-loose mb-20 font-bold bg-gradient-to-b from-blue-200 via-blue-400 to-green-500 bg-clip-text text-transparent">
          Text To Image Convertor
        </h1>
        <div className="flex justify-center items-center gap-10">
          <Color changeColor={changeColor} setChagneColor={setChagneColor} />
          <TextToImage changeColor={changeColor} />
        </div>
      </div>
      <footer className="footer footer-center p-4 bg-base-300 text-base-content fixed bottom-0">
        <div>
          <a href="https://github.com/EhsanKinux" className="link link-success">
            I'm EKinux
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
