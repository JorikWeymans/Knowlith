import SidebarSection from "@/components/DashboardSections/SidebarSection";
import NavSection from "@/components/DashboardSections/NavSection";
import ContextbarSection from "@/components/DashboardSections/Contextbar/ContextbarSection";

export default function Home() {
  return (
      <div className={"dashboard"}>
          <SidebarSection></SidebarSection>
          <NavSection></NavSection>
          <div className={"ddashboard-section con bg-yellow-500"}>Content</div>

          <ContextbarSection></ContextbarSection>
      </div>

  );
}
