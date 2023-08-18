import React from "react";
import { CirclePicker } from "react-color";

const Color = ({ changeColor, setChagneColor }) => {
  return (
    <CirclePicker
      color={changeColor}
      onChange={(color) => setChagneColor(color.hex)}
      disableAlpha
      presetColors={[
        "#FDE5EC",
        "#FCBAAD",
        "#E48586",
        "#916DB3",
        "#272829",
        "#61677A",
        "#D8D9DA",
        "#FFF6E0",
        "#CECE5A",
        "#FFE17B",
        "#FD8D14",
        "#C51605",
        "#8062D6",
        "#9288F8",
      ]}
    />
  );
};

export default Color;
