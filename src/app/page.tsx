import SidebarSection from "@/components/DashboardSections/SidebarSection";
import NavSection from "@/components/DashboardSections/NavSection";
import ContextbarSection from "@/components/DashboardSections/Contextbar/ContextbarSection";
import MainContentSection from "@/components/DashboardSections/MainContentSection";

export default function Home() {
  return (
      <div className={"dashboard"}>
          <SidebarSection />
          <NavSection />
          <MainContentSection />
          <ContextbarSection />
      </div>

  );
}
