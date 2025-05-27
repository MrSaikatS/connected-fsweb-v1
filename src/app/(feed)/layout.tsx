import AppHeader from "@/components/Header/AppHeader";
import FeedSidebar from "@/components/Sidebars/FeedSidebar";
import { LayoutProps } from "@/lib/types";

const FeedLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <AppHeader />

      <div className="mx-auto max-w-7xl px-6 py-16 md:grid md:grid-cols-4">
        <main className="md:col-span-3">{children}</main>

        <FeedSidebar />
      </div>
    </>
  );
};

export default FeedLayout;
