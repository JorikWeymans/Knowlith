import "../dashboardsections.css"
import ProfileCard from "@/components/DashboardSections/Contextbar/ContextCards/ProfileCard";
import WeeklyStatisticsCard from "@/components/DashboardSections/Contextbar/ContextCards/WeeklyStatisticsCard";

const ContextbarSection = () => {
    return (
        <section className={"rounded-default contextbar-section bg-gray-300 " +
                        "flex flex-col gap-2"}>


            <ProfileCard />
            <WeeklyStatisticsCard />
            <div className={"bg-red-200"}> test </div>

        </section>
    );
};

export default ContextbarSection;