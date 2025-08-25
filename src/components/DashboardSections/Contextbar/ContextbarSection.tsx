import "../dashboardsections.css"
import ProfileCard from "@/components/DashboardSections/Contextbar/ContextCards/ProfileCard";
import WeeklyStatisticsCard from "@/components/DashboardSections/Contextbar/ContextCards/WeeklyStatisticsCard";
import GetPremiumCard from "@/components/DashboardSections/Contextbar/ContextCards/GetPremiumCard";

const ContextbarSection = () => {
    return (
        <section className={"rounded-default rsb flex flex-col gap-2"}>
            <ProfileCard />
            <WeeklyStatisticsCard />
            <GetPremiumCard />

        </section>
    );
};

export default ContextbarSection;