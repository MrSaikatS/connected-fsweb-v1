import { LayoutDashboard, SquarePen, UserRound } from "lucide-react";
import Link from "next/link";

const MobileMenu = () => {
  return (
    <>
      <div className="fixed right-0 bottom-0 left-0 z-50 grid grid-cols-3 place-items-center border-t py-2">
        <Link
          href={"/"}
          className="grid place-items-center">
          <LayoutDashboard />
          <span className="text-xs">Feed</span>
        </Link>

        <Link
          href={"/"}
          className="grid place-items-center">
          <SquarePen />
          <span className="text-xs">Create</span>
        </Link>

        <Link
          href={"/"}
          className="grid place-items-center">
          <UserRound />
          <span className="text-xs">Profile</span>
        </Link>
      </div>
    </>
  );
};

export default MobileMenu;
