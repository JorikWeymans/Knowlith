import React from 'react';
import {SignIn} from "@clerk/nextjs";

const Page = () => {
    return <div className={"flex justify-center items-center h-full"}> <SignIn /> </div>;
}

export default Page;

