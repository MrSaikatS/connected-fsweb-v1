import AppHeader from "@/components/Header/AppHeader";
import { LayoutProps } from "@/lib/types";

const FeedLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <AppHeader />

      <main className="mx-auto max-w-7xl px-6 py-3">{children}</main>
    </>
  );
};

export default FeedLayout;
