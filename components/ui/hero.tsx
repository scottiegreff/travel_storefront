import type { Hero } from "@/types";
import Image from "next/image";

interface HeroProps {
  data: Hero[];
}

const Hero: React.FC<HeroProps> = ({ data }) => {
  const img = data[0]?.imageUrl as string;
  const label = data[0]?.label;

  return (
    <div className="h-[80vh] w-auto flex items-center justify-center mt-5">
      <div
        className="h-full rounded-lg overflow-hidden flex items-center justify-center"
        style={{
          width: "auto",
          aspectRatio: "auto",
          maxWidth: "100%",
          background: "none",
        }}
      >
        <video
          src={img}
          autoPlay={true}
          loop={true}
          // alt="Image description"
          className="h-full object-cover"
          style={{ borderRadius: "inherit" }}
        />
      </div>
    </div>
  );
};

export default Hero;
{
  /* <div className="h-full w-full text-center gap-y-8 flex items-center justify-center">
        <div className="font-bold text-3xl text-pink-400 sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">
          {data?.label}
        </div>
      </div>  */
}
