import ContextCard from "@/components/DashboardSections/Contextbar/ContextCards/ContextCard";
import Icon from "@/helpers/Icons";
import IconType from "@/types/IconType";
import Image from "next/image";

interface LegendProps {
    position: number;
    title: string;
    lessonsCompleted: number;
}
const LegendItem = ({position, title, lessonsCompleted}: LegendProps) => {
    return (
        <div className={"flex items-center bg-light-2 rounded-default p-medium gap-1 justify-between"}>
            <div className={"flex items-center justify-center rounded-full w-[26px] h-auto aspect-square"}
                style={{backgroundColor: GetPositionColor(position)}}>
                <p className={"font-normal text-dark-2"}>{position}</p>
            </div>
            <h1 className={"flex-1 truncate"}>{title}</h1>
           <div className={"flex flex-col items-center"}>
               <div className={"flex items-center gap-2"}>
                   <Icon iconType={IconType.Lesson} size={20} colorClassName={"text-dark-2"}/>
                   <p className={"font-semibold text-base text-dark-2"}>{lessonsCompleted}</p>
               </div>
               <p className={"font-light text-[10px] text-dark-2 leading-3"}>completed</p>
           </div>

        </div>
    )
}
const WeeklyStatisticsCard = () => {
    return (
       <ContextCard title={"Weekly statistics"}>

           <Image src={'/temp/images/graph.png'} alt={'graph'} width={235*20} height={148*20}
           className={"h-[128px] w-auto"}/>
           <div className={"flex flex-col gap-1"}>
               <LegendItem position={1} title={"Intro into c#"} lessonsCompleted={52}/>
               <LegendItem position={2} title={"History of Spanish civil war"} lessonsCompleted={31}/>
               <LegendItem position={3} title={"Intro into algebra"} lessonsCompleted={16}/>
           </div>
       </ContextCard>
    );
};

const GetPositionColor = (position: number) =>
{
    switch (position) {
        case 1: return "#F5C542"
        case 2: return "#F45B69"
        case 3: return "#A684E0"
        default: return "#FFFFFF"
    }
}
export default WeeklyStatisticsCard;