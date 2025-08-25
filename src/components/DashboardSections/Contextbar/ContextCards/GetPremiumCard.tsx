import React from 'react';
import ContextCard from "@/components/DashboardSections/Contextbar/ContextCards/ContextCard";

const GetPremiumCard = () => {
    return (
        <ContextCard title={"Get Premium"} className={"bg-secondary h-full"} titleClassName={"text-light-1"}>
            <div className={"flex flex-col justify-between grow"}>
                <p className={"text-light-1 text-xs font-normal"}>Unlock cool features by selecting one of the plans</p>
                <div className={"w-full bg-accent cursor-pointer text-center p-2 rounded-default font-semibold font-heading text-xs"}>
                    Upgrade plan
                </div>
            </div>
        </ContextCard>
    );
};

export default GetPremiumCard;