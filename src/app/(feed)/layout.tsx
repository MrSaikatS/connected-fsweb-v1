import Header from "@/components/Header/Header";
import { LayoutProps } from "@/lib/types";

const FeedLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />

      <main className="mx-auto max-w-7xl px-6 py-3">{children}</main>
    </>
  );
};

export default FeedLayout;
