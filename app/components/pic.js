"use client";

import Image from "next/image";
import { useTheme } from "next-themes";

const pic = (props) => {
  const { theme, setTheme } = useTheme();
  if (theme == "dark") {
    var src = "/foto_dark.jpg";
    /* var src = '/foto_light.jpg'; */
  } else {
    var src = "/foto_light.jpg";
  }
  return (
    <div className="cvPic shadow">
      <Image
        src={src}
        width={props.width}
        height={props.height}
        alt="Picture of the author"
      />
    </div>
  );
};

export default pic;
