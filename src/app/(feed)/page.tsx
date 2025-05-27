import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Feed | ConnectEd",
  description: "Feed page of ConnectEd",
};

const page = () => {
  return (
    <section className="grid h-[90dvh] place-items-center">
      <div className="bg-gradient-to-tr from-rose-600 to-violet-600 bg-clip-text p-2">
        <div className="text-center text-5xl font-bold text-transparent">
          A Full Stack Social Media Web Application
        </div>
        <div className="text-center text-5xl font-bold text-transparent">
          (Version 1)
        </div>
      </div>
    </section>
  );
};

export default page;
