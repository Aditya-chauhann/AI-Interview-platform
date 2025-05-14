import { Button } from "@/components/ui/button";
import { dummyInterviews } from "@/constants";
import Image from 'next/image'
import Link from "next/link";
import InterviewCard from '@/components/interviewCard'; 

const Page = () => {
  return (
    <>
      <section className="card-cta">
        <div className="flex flex-col gap-6 max-w-lg">
          <h2>Give an AI Based Interview Based on Your Skills</h2>
          <p className="text-lg">
            An easy and fast way to experience interviews
          </p>
          <Button asChild className="btn-primary max-sm:w-full">
            <Link href="/interview">Start an Interview</Link>
          </Button>
        </div>
        <Image src="/robot.png" alt="robo" width={400} height={400} className="max-sm:hidden" />
      </section>
      <section className="flex flex-col gap-6 mt-8">
        <h2>Your Interviews</h2>
        <div className="interviews-section"> 
          {dummyInterviews.map((interview) => (
            <InterviewCard {...interview} key={interview.id} />
          ))}
          {/* <p>You haven&apos;t taken any interviews yet.</p> */}
        </div>
      </section>

      <section className="flex flex-col gap-6 mt-8">
        <h2>Take an Interview</h2>
        <div className="interviews-section">
          {dummyInterviews.map((interview) => (
            <InterviewCard {...interview} key={interview.id} />
          ))}
          {/* <p>There are no interviews available.</p> */}
        </div>
      </section>
    </>
  );
};

export default Page;