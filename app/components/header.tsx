import Link from "next/link";
import { Icon, IconName } from "./icon";

type HeaderProps = Readonly<{
  title?: string;
  href: string;
  children?: React.ReactNode;
  iconName?: IconName;
  iconClassName?: string;
}>;

export function Header({
  title,
  href,
  children,
  iconName,
  iconClassName,
}: HeaderProps) {
  const iconNameFallback = iconName ?? "arrow-left";
  const classNameDefault = "flex w-full gap-5 items-center";

  return (
    <div
      className={`${classNameDefault} ${children ? "justify-between" : null}`}
    >
      {children || null}
      <Link
        href={href}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-300 transition-all hover:bg-zinc-100"
      >
        <Icon
          name={iconNameFallback}
          className={`text-[#242424] ${iconClassName}`}
        />
      </Link>
      {!children ? <div className="text-xl font-semibold">{title}</div> : null}
    </div>
  );
}
