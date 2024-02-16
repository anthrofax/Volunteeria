"use client";
import { Button } from "flowbite-react";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

let loadingProgress = 0;

function Jumbotron() {
  const [isHovered, setIsHovered] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div
      className="jumbotron border-2 h-[45rem] bg-purple2 transition-all"
      onMouseEnter={() => {
        setIsHovered(true);
        setIsLoading(false);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsLoading(true);
      }}
    >
      <LoadingBar isLoading={isLoading} />
      <SliderButton direction="left" showed={isHovered} />
      <SliderButton direction="right" showed={isHovered} />
    </div>
  );
}

type directions = "left" | "right";

function SliderButton({
  direction,
  showed,
}: {
  direction: directions;
  showed: boolean;
}) {
  return (
    <Button
      className={`h-28 w-14 absolute ${
        direction === "right" ? "right-0" : ""
      }  top-1/2 -translate-y-1/2 bg-black2 hover:opacity-100 hover:h-36 transition-all ${
        !showed ? "opacity-0" : "opacity-40"
      }`}
    >
      {direction === "left" && <IoIosArrowBack size={50} />}
      {direction === "right" && <IoIosArrowForward size={50} />}
    </Button>
  );
}

function LoadingBar({ isLoading }: { isLoading: boolean }) {
  const [loadingProgress, setLoadingProgress] = useState(0);
  //   const loadingProgressString = loadingProgress.toString();
  const loadingBar = useRef() as MutableRefObject<HTMLDivElement>;

  useEffect(
    function () {
      const interval = setInterval(function () {
        if (loadingProgress === 100) {
          loadingBar.current.style.transitionDuration = "0ms";
          setLoadingProgress(0);
          loadingBar.current.style.transitionDuration = "150ms";
        }

        if (isLoading) setLoadingProgress((value) => value + 1);
        //   console.log(loadingBar.current)

        loadingBar.current.style.width = `${loadingProgress}vw`;
      }, 100);

      return () => clearInterval(interval);
    },
    [loadingProgress, isLoading]
  );

  return (
    <div
      className={`bg-black2 rounded-lg  h-2 transition-all`}
      ref={loadingBar}
    ></div>
  );
}

export default Jumbotron;
