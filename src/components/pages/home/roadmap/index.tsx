import classNames from "classnames";
import Image from "next/image";
import { ROADMAP } from "../../../../constants/strings";
import Style from "./style";

function HomeRoadmap() {
  return (
    <Style>
      <div className="bg-gray-950 sm:p-12 p-0 scroll-mt-24" id="roadmap">
        <div className="layout layout--center bg-gray-900 sm:rounded-xl py-12 px-6 sm:p-12 ">
          <h2 className="text-center sm:text-5xl font-bold text-3xl text-white">
            {ROADMAP.TITLE}
          </h2>
          <div className="sm:mt-6 mt-6 flex sm:flex-row flex-wrap flex-col sm:gap-y-0 gap-y-6 justify-center">
            {ROADMAP.ITEMS.map((data, key) => {
              const { DONE } = data;
              return (
                <div
                  key={data.TITLE}
                  className={`flex md:flex-col justify-between gap-y-4 py-4 text-white sm:px-6 ${
                    key === 0 || key / 2 === 1 ? "flex-row-reverse" : "flex-row"
                  }`}
                >
                  <div className="relative flex items-center">
                    <div
                      className={classNames(
                        "flex items-center relative",
                        DONE ? "rounded-full border-4 border-red-100" : ""
                      )}
                    >
                      <Image
                        src={data.IMG}
                        alt={data.TITLE}
                        width={278}
                        height={278}
                      />
                    </div>
                  </div>
                  <div
                    className={classNames(
                      "flex sm:items-center flex-col  gap-y-4",
                      key === 0 || key / 2 === 1
                        ? "pr-4 sm:p-0"
                        : "smp:p-0 pl-4"
                    )}
                  >
                    <h3 className="sm:text-xl text-lg font-semibold">
                      {data.TITLE}
                    </h3>
                    <div className="flex flex-col sm:text-lg text-md sm:items-center sm:gap-y-2 gap-y-1 font-poppins">
                      {data.PROPS.map((prps) => (
                        <p key={prps}>{prps} </p>
                      ))}
                    </div>
                    <h4 className="sm:text-xl text-lg">{data.DATE}</h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Style>
  );
}

export default HomeRoadmap;
