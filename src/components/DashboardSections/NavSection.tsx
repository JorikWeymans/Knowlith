import "./dashboardsections.css"
import Icon from "@/helpers/Icons";
import IconType from "@/types/IconType";
import Image from "next/image";

const NavSection = () => {
    return (
        <section className="dashboard-section nav nav-section py-large">
            <div className={"a bg-light-2 ml-large rounded-default flex items-center p-medium gap-5"}>
                <Icon iconType={IconType.Search} colorClassName={"text-dark-2"}></Icon>
                <p className={"text-dark-2 text-base"}>Search course...</p>
            </div>
            <div className={"b flex justify-end mr-large gap-2 items-center"}>
                <div className={"aspect-square border border-dark-2 flex items-center rounded-full p-1 relative cursor-pointer " +
                    "after:content-[''] after:absolute after:top-1 after:right-1 " +
                    "after:w-3 after:h-3 after:bg-highlight after:rounded-full " +
                    "after:border after:border-light-1 after:translate-x-1/2 after:-translate-y-1/2"}>
                    <Icon iconType={IconType.Notification}></Icon>
                </div>

                {/*this div so it is able to become a component later if needed*/}
                <div className={"w-[39px] h-[39px]"}>
                    <div
                        className={"w-full h-full rounded-full flex items-center box-content border border-primary cursor-pointer"}>
                        <div
                            className={"w-full h-full rounded-full border border-secondary flex items-center overflow-hidden"}>
                            <Image src={"/temp/images/profile_avatar.png"}
                                   alt={"profile avatar"} width={39} height={39}
                                   className={"w-auto h-full"}></Image>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default NavSection;