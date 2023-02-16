import { useCallback, useEffect, useMemo, useState } from "react";
import tailwind from "tailwindcss/defaultConfig";

const localScreens = ["xs", "sm", "md", "lg", "xl", "2xl"];
type TwScreenTypes = "sm" | "md" | "lg" | "xl" | "2xl";
type LocalScreenTypes = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

type TwScreensType =
  | {
      [key in TwScreenTypes]: string;
    }
  | {};

const UseTailwindScreens = () => {
  const [screen, setScreen] = useState<LocalScreenTypes>("xs");

  const screens = useMemo<TwScreensType>(() => {
    return tailwind?.theme?.screens || {};
  }, []);

  const handleScreenChange = useCallback(() => {
    const width = window.innerWidth;
    const updatedScreens: {
      key: TwScreenTypes;
      value: number;
    }[] = [];

    if (screens) {
      for (let scr in screens) {
        updatedScreens.push({
          value: (screens as any)?.[scr]?.replace("px", ""),
          key: scr as TwScreenTypes,
        });
      }
    }

    const currentScreen: TwScreenTypes | undefined = updatedScreens
      .reverse()
      .find(({ value }) => Number(value) <= Number(width))?.key;

    if (!currentScreen) {
      setScreen("xs");
      return;
    }

    setScreen(currentScreen);
  }, [screens]);

  useEffect(() => {
    handleScreenChange();
    window.addEventListener("resize", handleScreenChange);
    return () => window.addEventListener("resize", handleScreenChange);
  }, [handleScreenChange]);

  const isMobile = screen === "xs";

  const equalOrLarger = useCallback(
    (selectedScreen: string) => {
      const screenIndex = localScreens.findIndex((sc) => sc === screen);
      const selectedScreenIndex = localScreens.findIndex(
        (sc) => sc === selectedScreen
      );
      if (selectedScreenIndex <= screenIndex) return true;
      return false;
    },
    [screen]
  );

  return { screen, isMobile, equalOrLarger };
};

export default UseTailwindScreens;
