import React from 'react';
import Image from "next/image";
import {UserButton} from "@clerk/nextjs";

interface Props {
    size: number;
    hasBigBorder?: boolean;
}
const ProfileImage = ({size, hasBigBorder = false}: Props) => {

    const borderClass = hasBigBorder ? "border-3" : "border-1";

    return (
        <div
            className={"w-full h-full rounded-full flex items-center box-border border-primary " + borderClass }>
            <div
                className={"w-full h-full rounded-full border-secondary flex items-center overflow-hidden " + borderClass}>

                <Image src={"/temp/images/profile_avatar.png"}
                       alt={"profile avatar"} width={size} height={size}
                       className={"w-auto h-full"}></Image>
            </div>
        </div>
    );
};

export default ProfileImage;