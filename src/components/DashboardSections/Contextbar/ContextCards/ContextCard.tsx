import {ReactNode} from "react";

interface ContextCardProps {
    title: string;
    children: ReactNode;
    className?: string;
    titleClassName?: string;
}

const ContextCard = ({title, children, className, titleClassName}: ContextCardProps) => {
    return (
        <article className={`rounded-default p-large bg-light-1 flex flex-col gap-2 ${className}`}>
            <h1 className={`font-bold text-lg ${titleClassName}`}>{title}</h1>
            {children}
        </article>
    );
};

export default ContextCard;