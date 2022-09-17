import Image from "next/image";
import Style from "./style";
import Button from "../../../../components/utilities/button";
import DiscordComponent from "../../../utilities/socials/discord";
import useIsMobile from "../../../../hooks/useIsMobile";
import { HOME } from "../../../../constants/strings";
import { DISCORD_URL, APP_ROUTE } from "../../../../constants/links";
import Link from "next/link";

function HomeHeader() {
  const isMobile = useIsMobile();
  return (
    <Style>
      <div className="w-full bg-gray-200 h auto relative desktop:pt-44 pt-32 bg-green-200 overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 left-0">
          <Image
            src="/main/pattern.webp"
            alt="bg"
            objectFit="cover"
            layout="fill"
          />
        </div>
        <div className="layout relative layout--center flex desktop:justify-between justify-center items-end desktop:pb-0 pb-72">
          <div className="absolute desktop:-right-40 -right-12 -bottom-2">
            <div className="absolute desktop:right-20 right-14 desktop:-bottom-52 -bottom-24 rotate">
              <Image
                width={!isMobile ? 800 : 800}
                height={!isMobile ? 814 : 814}
                src="/main/header-back.webp"
                alt="logo"
              />
            </div>
            {!isMobile && (
              <div>
                <div className="absolute desktop:left-40 desktop:top-28 scale-animation">
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
            <Image
              width={!isMobile ? 953 : 953}
              height={!isMobile ? 700 : 700}
              src="/main/header-charachter.webp"
              alt="logo"
              unoptimized={true}
            />
          </div>

          {!isMobile && (
            <div className="desktop:mb-12 mb-24 flex-col gap-y-8 text-white desktop:flex hidden z-30">
              <h2 className="whitespace-pre desktop:text-6xl desktop:leading-9 font-bold">
                {" "}
                {HOME.HEADER.TITLE}{" "}
              </h2>
              <h2 className="font-poppins whitespace-pre desktop:text-xl desktop:leading-4 font-semibold">
                {" "}
                {HOME.HEADER.DESCRIPTION}{" "}
              </h2>
              <div className="flex items-center gap-x-2">
                <div className="flex">
                  <Link href={APP_ROUTE}>
                    <a>
                      <Button>Play Game</Button>
                    </a>
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
        <div className="layout relative layout--center flex bg-gray-950 px-6 py-12 z-30">
          <div className="flex-col flex gap-y-8 text-white w-full">
            <h2 className="text-4xl w-full leading-12 font-bold">
              {" "}
              {HOME.HEADER.TITLE}{" "}
            </h2>
            <h2 className="font-poppins text-lg leading-12 font-semibold">
              {" "}
              {HOME.HEADER.DESCRIPTION}{" "}
            </h2>
            <div className="flex items-center gap-x-2 w-full">
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
