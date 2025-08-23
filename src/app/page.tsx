import SidebarSection from "@/components/DashboardSections/SidebarSection";

export default function Home() {
  return (
      <div className={"dashboard"}>
          <SidebarSection></SidebarSection>
          <div className={"ddashboard-section nav bg-blue-500"}>Nav</div>
          <div className={"ddashboard-section con bg-yellow-500"}>Content</div>
          <div className={"ddashboard-section rsb bg-red-300"}>Content sidebar</div>
      </div>

  );
}
