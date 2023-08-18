import React, { useState, useRef } from "react";
import html2canvas from "html2canvas";

const TextToImage = ({ changeColor }) => {
  const [text, setText] = useState("");
  const textRef = useRef(null);

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleConvertToImage = () => {
    const options = {
      backgroundColor: null,
    };

    html2canvas(textRef.current, options).then((canvas) => {
      const image = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = image;
      link.download = "text_image.png";
      link.click();
    });
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <textarea
          value={text}
          onChange={handleTextChange}
          placeholder="Enter your text here..."
          className="textarea textarea-accent mb-5"
        />
      </div>
      <p
        ref={textRef}
        className="font-[Helvetica] text-lg flex p-4 max-w-xs"
        style={{ color: changeColor }}
      >
        {text}
      </p>
      <button
        onClick={handleConvertToImage}
        className="btn btn-outline btn-accent m-4"
      >
        Convert and Download
      </button>
    </div>
  );
};

export default TextToImage;
