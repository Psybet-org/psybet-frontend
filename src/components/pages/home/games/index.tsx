import Image from "next/image";
import { GAMES } from "../../../../constants/strings";
import Style from "./style";

function HomeGames() {
  return (
    <Style>
      <div
        style={{
          background: "linear-gradient(0deg, #ef6976 0%,  #ba1831 100%)",
        }}
        className="relative overflow-hidden sm:py-12 py-12 px-6 sm:pb-24 scroll-mt-24"
        id="games"
      >
        <h2 className="text-center sm:text-5xl mb-6 sm:mb-0 font-bold text-3xl text-white">
          {GAMES.TITLE}
        </h2>
        <div className="relative flex items-center justify-center  sm:mt-12">
          <div className="relative layout layout--center rounded-xl overflow-hidden">
            <Image
              width={6252}
              height={1990}
              layout="responsive"
              objectFit="cover"
              alt={"games"}
              src="/home/game-cover.webp"
              className="shadow-lg border-1"
              quality={100}
            />
          </div>
        </div>
      </div>
    </Style>
  );
}

export default HomeGames;
