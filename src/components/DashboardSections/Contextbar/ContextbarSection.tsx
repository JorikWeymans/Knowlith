import "../dashboardsections.css"
import ProfileCard from "@/components/DashboardSections/Contextbar/ContextCards/ProfileCard";

const ContextbarSection = () => {
    return (
        <section className={"rounded-default contextbar-section bg-gray-300 " +
                        "flex flex-col gap-2"}>


            <ProfileCard />
            <div className={"bg-red-200"}> test </div>
            <div className={"bg-red-200"}> test </div>
            <div className={"bg-red-200"}> test </div>
        </section>
    );
};

export default ContextbarSection;