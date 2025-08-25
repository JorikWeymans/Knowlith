import SidebarSection from "@/components/DashboardSections/SidebarSection";
import NavSection from "@/components/DashboardSections/NavSection";

export default function Home() {
  return (
      <div className={"dashboard"}>
          <SidebarSection></SidebarSection>
          <NavSection></NavSection>
          <div className={"ddashboard-section con bg-yellow-500"}>Content</div>
          <div className={"ddashboard-section rsb bg-red-300"}>Content sidebar</div>
      </div>

  );
}
