import Image from "next/image";
import Link from "next/link";
import Button from "../../../../components/utilities/button";
import { APP_ROUTE, DISCORD_URL } from "../../../../constants/links";
import { HOME } from "../../../../constants/strings";
import useIsMobile from "../../../../hooks/useTailwindScreens";
import DiscordComponent from "../../../utilities/socials/discord";
import Style from "./style";

function HomeHeader() {
  const { isMobile } = useIsMobile();
  return (
    <Style>
      <div className="w-full h-auto relative lg:pt-32 md:pt-24 sm:pt-24 pt-12 bg-green-200 overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 left-0">
          <Image
            src="/main/pattern.webp"
            alt="bg"
            width={13760}
            height={3221}
            className="object-cover h-full min-h-full"
          />
        </div>
        <div className="absolute sm:-right-24 -right-6 left-0 -bottom-2">
          <div className="relative">
            <Image
              width={800}
              height={814}
              src="/main/header-back.webp"
              alt="logo"
              className="absolute -bottom-48 right-0 md:right-10 lg:right-44 w-[70%] min-w-[450px] lg:w-[40%] md:w-[50%] sm-[80%]  sm:min-w[500px] md:min-w-[700px] rotate"
            />
            <Image
              width={950}
              height={700}
              src="/main/header-charachter.webp"
              alt="charachter"
              className="absolute bottom-0 right-0 md:right-10 lg:right-44 w-[70%] min-w-[450px] lg:w-[40%] md:w-[50%] sm-[80%]  sm:min-w[500px] md:min-w-[700px]"
            />
          </div>

          {!isMobile && (
            <div>
              <div className="absolute sm:left-40 sm:top-0 scale-animation">
                <Image
                  className="rotate-45"
                  width={25}
                  height={25}
                  src="/main/shine.webp"
                  alt="logo"
                />
              </div>
              <div className="absolute left-32 top-52 scale-animation">
                <Image
                  width={30}
                  height={30}
                  src="/main/shine.webp"
                  alt="logo"
                  className="rotate-45"
                />
              </div>
              <div className="absolute left-64 ml-4 top-28 scale-animation">
                <Image
                  className="rotate-12"
                  width={25}
                  height={25}
                  src="/main/shine.webp"
                  alt="logo"
                />
              </div>
            </div>
          )}
        </div>
        <div className="layout relative layout--center flex sm:justify-between justify-center items-end sm:pb-0 pb-72">
          {!isMobile && (
            <div className="sm:mb-12 mb-24 flex-col gap-y-8 text-white flex relative sm:rounded-xl sm:p-5 overflow-hidden lg:rounded-none lg:p-0">
              <div className="hidden sm:block absolute lg:hidden left-0 right-0 bottom-0 top-0 bg-[#341a23] opacity-70 " />

              <h2 className="whitespace-pre sm:text-6xl sm:leading-9 font-bold z-10">
                {" "}
                {HOME.HEADER.TITLE}{" "}
              </h2>
              <h2 className="font-poppins whitespace-pre sm:text-xl sm:leading-4 font-semibold z-10">
                {" "}
                {HOME.HEADER.DESCRIPTION}{" "}
              </h2>
              <div className="flex items-center gap-x-2 z-10">
                <div className="flex">
                  <Link href={APP_ROUTE}>
                    <Button>Play Game</Button>
                  </Link>
                </div>
                <a href={DISCORD_URL}>
                  <DiscordComponent />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
      {isMobile && (
        <div className="layout relative layout--center flex bg-gray-950 px-6 py-12 z-50">
          <div className="flex-col flex gap-y-8 text-white w-full">
            <h2 className="text-4xl w-full leading-12 font-bold">
              {" "}
              {HOME.HEADER.TITLE}{" "}
            </h2>
            <h2 className="font-poppins text-lg leading-12 font-semibold">
              {" "}
              {HOME.HEADER.DESCRIPTION}{" "}
            </h2>
            <div className="flex items-center gap-x-2 w-full max-w-[340px]">
              <div className="flex w-full">
                <Button className="w-full">Play Game</Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Style>
  );
}

export default HomeHeader;
