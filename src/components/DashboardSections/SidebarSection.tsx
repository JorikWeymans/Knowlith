import "./dashboardsections.css"
import Image from "next/image";
import Link from "next/link";
import Icon from "@/helpers/Icons";
import IconType from "@/types/IconType";


const SidebarSection = () => {
    return (
        <section className={"dashboard-section lsb"}>
            <div className={"flex items-center p-large gap-4 border border-black"}>
                <Image src={"/images/KnowlithLogo.png"} alt={"Knowlith Logo"} width={69} height={53} />
                <p className={"font-bold text-secondary text-2xl tracking-[0.17em]"}>Knowlith</p>
            </div>
            <div className={"border border-black mt-2 p-medium"}>
                <Link href={"/"} className={"cursor-pointer flex items-center  bg-secondary p-large rounded-default gap-2"}>
                    <Icon iconType={IconType.Home} colorClassName={"text-light-1"} ></Icon>

                    <p className={"text-light-1 text-bold"}>Home</p>
                </Link>
            </div>
        </section>
    );
};

export default SidebarSection;