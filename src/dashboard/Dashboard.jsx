import { Navbar } from "../landingpage/Navbar";
import { Sidebar } from "./Sidebar";

export const Dashboard = () => {
  return (
    <div className="bg-[#9fd5d1] flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-grow">
        <Sidebar />
        <div className="flex flex-grow justify-center mt-40  ">
        </div>
      </div>
    </div>
  );
};
