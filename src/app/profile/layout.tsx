import AppHeader from "@/components/Header/AppHeader";
import { LayoutProps } from "@/lib/types";

const ProfileLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <AppHeader />

      <div className="mx-auto max-w-7xl px-6 py-16 md:grid md:grid-cols-4">
        <main className="md:col-span-3">{children}</main>

        <aside className="hidden md:col-span-1 md:block">SideBar</aside>
      </div>
    </>
  );
};

export default ProfileLayout;
