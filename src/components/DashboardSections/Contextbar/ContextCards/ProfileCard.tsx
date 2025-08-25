import React from 'react';
import ContextCard from "@/components/DashboardSections/Contextbar/ContextCards/ContextCard";
import Icon from "@/helpers/Icons";
import IconType from "@/types/IconType";
import ProfileImage from "@/helpers/ProfileImage";

interface ProfileStatItemProps {
    title: string;
    icon: IconType;
    value: number;
    iconColorClass: string;
}
const ProfileStatItem = ({title, icon, value, iconColorClass} : ProfileStatItemProps) => {
    return (
        <div className={"flex-1/3"}>
            <div className={"flex items-center justify-center gap-1"}>
                <Icon iconType={icon} size={20} colorClassName={iconColorClass} />
                <p className={"font-semibold text-base text-dark-2"}>{value}</p>
            </div>
            <p className={"text-center font-medium text-xs text-dark-2 whitespace-pre"}>{title}</p>
        </div>
    )
}
const ProfileCard = () => {
    return (
        <ContextCard title={"Your profile"}>
            <div className={"flex gap-2"}>
                <div className={"aspect-square w-[87px] h-auto  rounded-full flex"}>
                    <ProfileImage size={87} hasBigBorder={true}/>
                </div>
                <div>
                    <h2 className={"font-semibold text-base"}>Jorik Weymans</h2>
                    <div className={"flex gap-[2px] items-center"}>
                        <Icon iconType={IconType.Member} size={16} />
                        <h3 className={"font-normal text-xs text-dark-2"}>Pro User</h3>
                    </div>
                </div>

            </div>
            <div className={"flex rounded-default bg-light-2 justify-center gap-2 p-medium "}>
                <ProfileStatItem title={"Streak"} icon={IconType.Streak} value={103} iconColorClass={"text-highlight"} />
                <ProfileStatItem title={"Hours"} icon={IconType.Time} value={8} iconColorClass={"text-dark-2"} />
                <ProfileStatItem title={"Courses"} icon={IconType.Courses_2} value={28} iconColorClass={"text-dark-2"}  />
            </div>
        </ContextCard>
    );
};

export default ProfileCard;