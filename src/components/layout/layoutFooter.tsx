import classNames from "classnames";
import Link from "next/link";
import {
  DISCORD_URL,
  EMAIL,
  INSTAGRAM_URL,
  TWITTER_URL,
} from "../../constants/links";
import DiscordComponent from "../utilities/socials/discord";
import EmailComponent from "../utilities/socials/email";
import InstagramComponent from "../utilities/socials/instagram";
import TwitterComponent from "../utilities/socials/twitter";

function LayoutHeader() {
  return (
    <nav className={classNames("w-full sm:py-8 py-8 bg-darkgray-700")}>
      <div className="layout layout--center flex flex-col gap-y-4">
        <div className="flex justify-center">
          <Link href={DISCORD_URL}>
            <DiscordComponent className="footer-icon" />
          </Link>
          <Link href={TWITTER_URL}>
            <TwitterComponent className="footer-icon" />
          </Link>
          <Link href={EMAIL}>
            <EmailComponent className="footer-icon" />
          </Link>
          <Link href={INSTAGRAM_URL}>
            <InstagramComponent className="footer-icon" />
          </Link>
        </div>

        <h3 className="text-white sm:text-lg text-sm text-center w-full font-semibold">
          Copyright 2022, psybet all right reserved
        </h3>
      </div>
    </nav>
  );
}

export default LayoutHeader;
