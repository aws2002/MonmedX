import Navbar from "../Navbar/Navbar";
import Sidebar from "../SideBar/Sidebar";
export default function Layout({ children }) {
  return (
    <div className="h-screen flex flex-row justify-start">
      <Sidebar />
      <div className="bg-primary flex-1 p-4 ml-14">
        <Navbar />
        <div className=" h-[90vh] overflow-y-scroll pb-5">
        {children}
        </div>
      </div>
    </div>
  );
}
