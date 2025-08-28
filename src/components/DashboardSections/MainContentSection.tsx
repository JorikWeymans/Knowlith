import React from 'react';
import { GetCourses } from "@/temp/db/Courses";
import ProgressBar from "@/helpers/ProgressBar";
import Image from "next/image";

const CourseCard = ({course} : {course: Course}) => {
    return (
        <div className={"flex-1/3 rounded-default overflow-hidden relative  z-20"}>
            <div className={"bg-secondary p-medium"}>
                <h1 className={"font-semibold px-medium text-[18px] text-center text-light-1 truncate pb-medium"}>{course.title}</h1>
                <ProgressBar progress={course.completed}/>
            </div>
            <div className={"p-large text-center flex flex-col justify-between "}>
                <div className={"h-[100px]"}>
                    <p className={"font-medium text-xs overflow-hidden whitespace-normal line-clamp-4 text-ellipsis"}>{course.description}</p>
                    <p className={"font-semibold text-xs pt-1"}> Days left:{course.daysLeft}</p>
                </div>
                <div className={"bg-secondary w-full p-medium text-center text-light-1 rounded-default cursor-pointer"}>
                    Resume
                </div>
            </div>
            <div className="absolute -z-10 inset-0 ">
                <Image src={"/temp/images/card_backdrop.jpg"} alt={"Background"} className={"w-full h-full absolute object-cover opacity-45 blur-xs"} width={200} height={200}></Image>
                <div className={"w-full h-full bg-white"}></div>

            </div>
        </div>
    )
}

const MainContentSection = () => {
    const courseList = GetCourses();

    return (
       <main className={"dashboard-section con px-medium flex gap-2 items-start"}>
           {courseList.map((course) => (<CourseCard key={course.id} course={course} />))}
           {/*<div className={"bg-green-500"}>*/}
           {/*    ok*/}
           {/*</div>*/}
       </main>
    );
};

export default MainContentSection;