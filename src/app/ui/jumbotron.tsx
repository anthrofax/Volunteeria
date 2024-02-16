"use client";
import { Button } from "flowbite-react";
import { useRef, useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

function Jumbotron() {
  const jumbotron = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="jumbotron border-2 h-[45rem] bg-purple2 transition-all"
      ref={jumbotron}
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
        <LoadingBar/>
      <SliderButton direction="left" showed={isHovered}/>
      <SliderButton direction="right" showed={isHovered}/>
    </div>
  );
}

type directions = "left" | "right";

function SliderButton({ direction, showed }: { direction: directions, showed: boolean }) {
  return (
    <Button
      className={`h-28 w-14 absolute ${
        direction === "right" ? "right-0" : ""
      }  top-1/2 -translate-y-1/2 bg-black2 hover:opacity-100 hover:h-36 transition-all ${!showed ? 'opacity-0' : 'opacity-40'}`}
    >
      {direction === "left" && <IoIosArrowBack size={50} />}
      {direction === "right" && <IoIosArrowForward size={50} />}
    </Button>
  );
}

function LoadingBar() {
    return (
        <div className="bg-black1  h-2">

        </div>
    )
}

export default Jumbotron;
