import Sidebar from "./_components/Sidebar/Sidebar";
import Navbar from "./_components/navbar";
import OrganizationSidebar from "./_components/org-sidebar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <main className="h-full">
      <Sidebar />
      <div className="pl-[60px] h-full">
        <div className="flex gap-x-3 h-full">
          {/* organizations sidebar */}
          <OrganizationSidebar />
          <div className="h-full flex-1">
            {/* navbar */}
            <Navbar />
            {children}
          </div>
        </div>
      </div>
    </main>
  );
};

export default DashboardLayout;
