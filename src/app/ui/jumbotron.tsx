"use client";
import { Button } from "flowbite-react";
import {
  MutableRefObject,
  useContext,
  useEffect,
  useRef,
  useState,
  createContext,
} from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import Image from "next/image";

interface JumbotronContextProps {
  images: string[];
  imageLoaded: string;
  setImageLoaded: React.Dispatch<React.SetStateAction<string>>;
  handleNextImage: (prevImage: string) => string;
  handlePrevImage: (prevImage: string) => string;
}

const JumbotronContext = createContext<JumbotronContextProps>({
  images: [],
  imageLoaded: "",
  setImageLoaded: () => {},
  handleNextImage: (): string => {
    return "";
  },
  handlePrevImage: (): string => {
    return "";
  },
});

function Jumbotron({ images }: { images: string[] }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(images[0]);

  const handleNextImage = function (prevImage: string) {
    if (
      images.findIndex((image: string) => image === prevImage) ===
      images.length - 1
    )
      return images[0];

    return images[images.findIndex((image: string) => image === prevImage) + 1];
  };

  const handlePrevImage = function (prevImage: string) {
    if (images.findIndex((image: string) => image === prevImage) === 0)
      return images[images.length - 1];

    return images[images.findIndex((image: string) => image === prevImage) - 1];
  };

  return (
    <div
      className="jumbotron border-0 h-[45rem] bg-white transition-all relative overflow-hidden"
      onMouseEnter={() => {
        setIsHovered(true);
        setIsLoading(false);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsLoading(true);
      }}
    >
      <JumbotronContext.Provider
        value={{
          images,
          imageLoaded,
          setImageLoaded,
          handleNextImage,
          handlePrevImage,
        }}
      >
        <Image
          src={imageLoaded}
          quality={100}
          alt="Jumbotron image"
          className="transition-all absolute duration-1000 z-10"
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
        <div className="bg-black opacity-20 absolute top-0 left-0 right-0 bottom-0 z-20"></div>
        <LoadingBar isLoading={isLoading} images={images} />
        <h1></h1>
        <SliderButton direction="left" showed={isHovered} />
        <SliderButton direction="right" showed={isHovered} />
      </JumbotronContext.Provider>
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
  const { setImageLoaded, images, handleNextImage, handlePrevImage } =
    useContext(JumbotronContext);

  return (
    <Button
      className={`h-28 w-14 absolute z-20 ${
        direction === "right" ? "right-0" : ""
      }  top-1/2 -translate-y-1/2 bg-black2 hover:opacity-100 hover:h-36 transition-all ${
        !showed ? "opacity-0" : "opacity-40"
      }`}
      onClick={() => {
        setImageLoaded((prevImage: string) => {
          if (direction === "right") {
            return handleNextImage(prevImage);
          }

          if (direction === "left") {
            return handlePrevImage(prevImage);
          }

          return images[
            images.findIndex((image: string) => image === prevImage) + 1
          ];
        });
      }}
    >
      {direction === "left" && <IoIosArrowBack size={50} />}
      {direction === "right" && <IoIosArrowForward size={50} />}
    </Button>
  );
}

function LoadingBar({
  isLoading,
  images,
}: {
  isLoading: boolean;
  images: string[];
}) {
  const { setImageLoaded, handleNextImage } = useContext(JumbotronContext);
  const [loadingProgress, setLoadingProgress] = useState(0);
  //   const loadingProgressString = loadingProgress.toString();
  const loadingBar = useRef() as MutableRefObject<HTMLDivElement>;

  useEffect(
    function () {
      const interval = setInterval(function () {
        if (loadingProgress === 100) {
          loadingBar.current.style.opacity = "0";
          setLoadingProgress(0);
          setImageLoaded((prevImage: string) => handleNextImage(prevImage));
          loadingBar.current.style.opacity = "1";
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
      className={`bg-black2 rounded-lg  h-2 transition-all z-20 absolute`}
      ref={loadingBar}
    ></div>
  );
}

export default Jumbotron;
