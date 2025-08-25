import "./dashboardsections.css"
import Image from "next/image";
import Link from "next/link";
import Icon from "@/helpers/Icons";
import IconType from "@/types/IconType";


const SidebarSection = () => {
    return (
        <section className={"dashboard-section lsb flex flex-col p-medium"}>
            <div className={"flex items-center p-large gap-4 "}>
                <Image src={"/images/KnowlithLogo.png"} alt={"Knowlith Logo"} width={69} height={53} />
                <p className={"font-bold text-secondary text-2xl tracking-[0.17em]"}>Knowlith</p>
            </div>
            <div className={"mt-2 p-medium flex flex-col gap-2 grow"}>
                <SideBarButton iconType={IconType.Home} text="Home" isHighlighted={true} />
                <SideBarButton iconType={IconType.Courses_1} text="Courses" />
                <SideBarButton iconType={IconType.Courses_2} text="All courses" />
                <SideBarButton iconType={IconType.Home } text="All courses" />
            </div>
            <div className={"mt-2 p-medium flex flex-col gap-2"}>
                <SideBarButton iconType={IconType.Settings} text="Settings" />
                <SideBarButton iconType={IconType.LogOut} text="Logout" textColorDarkClass={"text-error"} hasRedText={true}/>
            </div>


        </section>
    );
};

interface SideBarButtonProps {
    iconType: IconType ;
    text: string;
    isHighlighted?: boolean;
    textColorLightClass?: string;
    textColorDarkClass?: string;
    hasRedText?: boolean;

}
const SideBarButton =  ({iconType, text, isHighlighted = false, hasRedText = false,} : SideBarButtonProps)=>
{
    const textColor = hasRedText? "text-error" : isHighlighted ? "text-light-1" : "text-dark-1";
    const hoverText = hasRedText? "group-hover:text-light-1" : "group-hover:text-light-1";

    return (
        <Link href={"/"} className={`group cursor-pointer flex items-center p-large rounded-default gap-3 hover:bg-secondary hover:text-red-500
                                     ${isHighlighted && "bg-secondary"}`}>
            <Icon iconType={iconType} colorClassName={`${hoverText} ${textColor}`} ></Icon>
            <p className={`font-semibold text-base ${hoverText} ${textColor}`}>{text}</p>
        </Link>)
}
export default SidebarSection;