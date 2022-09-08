
import Sidebar from "../SideBar/Sidebar";
export default function Layout({ children }) {
  return (
    <div className="h-screen flex flex-row justify-start">
      <Sidebar />
      <div className="bg-primary flex-1 p-4 ">
          {children}asdasd
      </div>
    </div>
  );
}


