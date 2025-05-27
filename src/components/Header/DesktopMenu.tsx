import { LayoutDashboard, SquarePen, UserRound } from "lucide-react";
import Link from "next/link";

const DesktopMenu = () => {
  return (
    <>
      <Link
        href={"/"}
        className="flex gap-2">
        <LayoutDashboard />
        <span className="">Feed</span>
      </Link>

      <Link
        href={"/"}
        className="flex gap-2">
        <SquarePen />
        <span className="">Create</span>
      </Link>

      <Link
        href={"/"}
        className="flex gap-2">
        <UserRound />
        <span className="">Profile</span>
      </Link>
    </>
  );
};

export default DesktopMenu;
