import Image from "next/image";
import { DISCORD_URL } from "../../../../constants/links";
import useIsMobile from "../../../../hooks/useTailwindScreens";
import Style from "./style";

function HomeParty() {
  const isMobile = useIsMobile();

  return (
    <Style>
      <div className="relative bg-gray-950">
        <div className="layout layout--center sm:py-24 pt-24 pb-12 px-6 sm:px-0">
          <div className="flex sm:flex-row flex-col sm:gap-x-8 gap-y-8">
            <a
              target={"_blank"}
              href={DISCORD_URL}
              className="z-20 transition-all duration-200 gift-card sm:py-10 py-6 rounded-2xl sm:w-2/3 w-full flex flex-col sm:gap-y-14 gap-y-6 justify-between shadow-2xl hover:scale-110"
              rel="noreferrer"
            >
              <div className="flex justify-between w-full">
                <div className="bg-red-400 text-md text-white w-max py-2 px-4 rounded-r-lg">
                  12 Winners
                </div>
                <div className="text-white flex sm:text-2xl font-semibold pr-8">
                  <p className="-mt-1">$</p>
                  300
                </div>
              </div>
              <div className="flex justify-center items-center gap-x-6">
                <Image
                  src="/socials/discord-big.webp"
                  width={!isMobile ? 156 : 70}
                  height={!isMobile ? 156 : 70}
                  alt={"discord"}
                />
                <p className="font-semibold text-white sm:text-5xl text-2xl">
                  Launch Gifts
                </p>
              </div>
              <div className="sm:text-md text-md text-center text-white px-4">
                we are giving away $300 to 12 lucky winner in discord
              </div>
            </a>
            <div className="sm:w-1/3 w-full relative flex flex-col text-white text-center sm:gap-y-12 gap-y-6 items-center">
              <h3 className="text-3xl font-semibold">Join us now !</h3>
              <p className="sm:text-xl text-md">
                we are giving away a bunch of Gift in discord everyweek make
                sure you dont miss it.Join us now...
              </p>
              {!isMobile && (
                <Image
                  src="/main/logo-string-pic.webp"
                  width={150}
                  height={200}
                  alt="logo"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </Style>
  );
}

export default HomeParty;
