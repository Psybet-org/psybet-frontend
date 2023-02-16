import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import Button from "../../components/utilities/button";
import { APP_ROUTE } from "../../constants/links";
import strings from "../../constants/strings";
import useScroll from "../../hooks/useScroll";
import useIsMobile from "../../hooks/useTailwindScreens";

function LayoutHeader() {
  const { scrollY, setY } = useScroll();
  const { isMobile } = useIsMobile();
  const notscrolled = scrollY > 40;

  return (
    <nav
      className={classNames(
        "w-full sm:py-4 py-4 fixed block right-0 top-0 left-0 z-50 font-poppins transition-all duration-300 overflow-hidden",
        (notscrolled || isMobile) && "bg-gray-900 shadow-lg"
      )}
    >
      <div className="layout layout--center flex justify-between">
        <div className="flex items-center text-white sm:text-xl text-md font-semibold">
          <a className="mr-6" role="button" onClick={() => setY()}>
            <Image
              src="/main/logo-string.webp"
              width={117}
              height={31}
              alt="logo"
            />
          </a>
          {!isMobile &&
            strings.HOME_MENUS.map((menu) => (
              <div
                key={menu.title}
                className={classNames(
                  "text-white mt-2 mr-3 hover:text-red-100 md:text-lg sm:text-md text-sm transition-all duration-150",
                  !notscrolled && "hover:text-gray-900"
                )}
              >
                <Link href={menu.href}>{menu.title}</Link>
              </div>
            ))}
        </div>
        <div className="flex items-center gap-x-4">
          <Link href={APP_ROUTE}>
            <Button type="classic">{strings.LAUNCH_APP}</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default LayoutHeader;
