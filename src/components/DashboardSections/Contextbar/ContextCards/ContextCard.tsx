import {ReactNode} from "react";

interface ContextCardProps {
    title: string;
    children: ReactNode;
}

const ContextCard = ({title, children}: ContextCardProps) => {
    return (
        <article className=" rounded-default p-large bg-light-1 flex flex-col gap-4" >
            <h1 className={"font-bold text-lg"}>{title}</h1>
            {children}
        </article>
    );
};

export default ContextCard;