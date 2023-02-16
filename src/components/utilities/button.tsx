import classnames from "classnames";

function Button(props: any) {
  const {
    size = "md",
    theme = "default",
    type = "default",
  }: {
    size: "sm" | "md" | "lg";
    theme: "default" | "link";
    type: "default" | "classic";
  } = props;

  const sizes: any = {
    md: "sm:text-sm md:text-lg text-xs rounded-md  boxshadow-lg md:px-12 sm:px-6 px-4 py-2 shadow-xl font-semibold",
  };

  const themes: any = {
    default:
      "bg-gradient-to-tr from-red-100 to-green-100 hover:from-red-200 hover:to-red-300 whitespace-nowrap",
  };

  const types: any = {
    default: `rounded-full`,
    classic: `rounded-md`,
  };

  return (
    <button
      {...props}
      className={classnames(
        "text-white font-poppins duration-300 transition-all",
        sizes[size],
        themes[theme],
        types[type],
        props.className
      )}
    />
  );
}

export default Button;
