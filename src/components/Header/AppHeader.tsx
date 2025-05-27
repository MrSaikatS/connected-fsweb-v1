import Link from "next/link";
import LogoutButton from "../Buttons/LogoutButton";
import ThemeToggleButton from "../Buttons/ThemeToggleButton";
import AppMenu from "./AppMenu";

const AppHeader = () => {
  return (
    <header
      className="fixed top-0 right-0 left-0 z-50 border-b shadow"
      aria-label="app-header">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <Link href={"/"}>
          <h1
            className="text-2xl font-semibold"
            aria-label="App Name">
            ConnectEd
          </h1>
        </Link>

        <nav className="flex items-center gap-4">
          <AppMenu />

          <LogoutButton />

          <ThemeToggleButton />
        </nav>
      </div>
    </header>
  );
};

export default AppHeader;
