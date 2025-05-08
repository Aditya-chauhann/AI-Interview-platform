import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import dayjs from 'dayjs';
import { Button } from "./ui/button";
import DisplayTechIcons from './DisplayTechIcons';
import { getRandomInterviewCover } from '@/lib/utils';

// Define the types
interface Feedback {
  interviewId: string;
  userId: string;
  finalAssessment: string;
  totalScore: number;
  createdAt: Date | string;
}

interface InterviewCardProps {
  interviewId: string;
  userId: string;
  role: string;
  type: string;
  techstack: string[];
  createdAt: Date | string;
}

// Utility functions to match first version
const cn = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ');
};


// Mock function to simulate the server action
const getFeedbackByInterviewId = async ({
  interviewId,
  userId,
}: {
  interviewId: string;
  userId: string;
}): Promise<Feedback | null> => {
  // This is a mock implementation - replace with actual data fetching
  return null;
};

const InterviewCard = async ({
  interviewId,
  userId,
  role,
  type,
  techstack,
  createdAt,
}: InterviewCardProps) => {
  const feedback =
    userId && interviewId
      ? await getFeedbackByInterviewId({
          interviewId,
          userId,
        })
      : null;
  
  const normalizedType = /mix/gi.test(type) ? "Mixed" : type;
  const badgeColor =
    {
      Behavioral: "bg-light-400",
      Mixed: "bg-light-600",
      Technical: "bg-light-800",
    }[normalizedType] || "bg-light-600";
  
  const formattedDate = dayjs(
    feedback?.createdAt || createdAt || Date.now()
  ).format("MMM D, YYYY");

  const DisplayTechStack = ({ techStack }: { techStack: string[] }) => (
    <div className="flex flex-row gap-2 items-center">
      {techStack.slice(0, 3).map((tech, index) => (
        <div key={`${tech}-${index}`} className="flex items-center">
          <div className="bg-gray-100 rounded-full p-1 size-8 flex items-center justify-center text-xs">
            {tech.substring(0, 2)}
          </div>
        </div>
      ))}
      {techStack.length > 3 && (
        <span className="text-sm text-gray-500">+{techStack.length - 3}</span>
      )}
    </div>
  );

  return (
    <div className="card-border w-[360px] max-sm:w-full min-h-96">
      <div className="card-interview">
        <div>
          {/* Type Badge */}
          <div
            className={cn(
              "absolute top-0 right-0 w-fit px-4 py-2 rounded-bl-lg",
              badgeColor
            )}
          >
            <p className="badge-text ">{normalizedType}</p>
          </div>
          {/* Cover Image */}
          <Image
            src={getRandomInterviewCover()}
            alt="cover-image"
            width={90}
            height={90}
            className="rounded-full object-fit size-[90px]"
          />
          {/* Interview Role */}
          <h3 className="mt-5 capitalize">{role} Interview</h3>
          {/* Date & Score */}
          <div className="flex flex-row gap-5 mt-3">
            <div className="flex flex-row gap-2">
              <Image
                src="/calendar.svg"
                width={22}
                height={22}
                alt="calendar"
              />
              <p>{formattedDate}</p>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <Image src="/star.svg" width={22} height={22} alt="star" />
              <p>{feedback?.totalScore || "---"}/100</p>
            </div>
          </div>
          {/* Feedback or Placeholder Text */}
          <p className="line-clamp-2 mt-5">
            {feedback?.finalAssessment ||
              "You haven't taken this interview yet. Take it now to improve your skills."}
          </p>
        </div>
        <div className="flex flex-row justify-between">
<DisplayTechIcons techStack={techstack} />         </div>
          <Button className="btn-primary">
            <Link
              href={
                feedback
                  ? `/interview/${interviewId}/feedback`
                  : `/interview/${interviewId}`
              }
            >
              {feedback ? "Check Feedback" : "View Interview"}
            </Link>
          </Button>
        
      </div>
    </div>
  );
};

export default InterviewCard;