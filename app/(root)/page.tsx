import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import React from "react";
import { dummyInterviews } from "@/constants";
import InterviewCard from "@/components/InterviewCard";

const Page = () => {
  return (
    <>
      <section className="card-cta flex flex-col lg:flex-row items-center justify-between gap-10 px-6">
        {/* Left Section: Text & Button */}
        <div className="flex flex-col gap-6 max-w-lg text-center lg:text-left">
          <h2 className="text-2xl font-bold">Get Interview-Ready with AI-Powered Practice & Feedback</h2>
          <p className="text-lg">Practice real interview questions & get instant feedback</p>

          {/* Ensure Button is properly styled */}
          <Button className="btn-primary max-sm:w-full">
            <Link href="/interview">Start an Interview</Link>
          </Button>
        </div>

        {/* Right Section: Image */}
        <Image
          src="/robot.png"
          alt="robo-dude"
          width={400}
          height={400}
          className="hidden lg:block"
        />
      </section>

      
      <section className="flex flex-col gap-6 mt-8">
       <h2>Your Interviews</h2>

       <div className="interviews-section">
       {dummyInterviews.map((interview)=>(
            <InterviewCard{...interview} key={interview.id}/>
          ))}
       </div>
      </section>
      <section className="flex flex-col gap-6 mt-8">
        <h2>Take an Interview</h2>

        <div className="interviews-section">
          {dummyInterviews.map((interview)=>(
            <InterviewCard{...interview}  key={interview.id}/>
          ))}
          {/* <p>You have nott taken any interview yet</p> */}
        </div>

      </section>
    </>
  );
};

export default Page;
