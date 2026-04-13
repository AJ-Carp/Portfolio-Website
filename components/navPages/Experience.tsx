'use client';

import React from 'react';
import { jetbrainsMono } from '@/app/font';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    title: "Software Engineer Intern",
    company: "Sela",
    location: "Remote",
    date: "January 2026 – March 2026",
    bullets: [
      "Built an AWS data pipeline using TypeScript, Lambda, S3, and Redshift Serverless to normalize billing data to FOCUS 1.2, stage Parquet files in S3, and load into Redshift, enabling faster cloud cost analytics.",
      "Migrated functionality from Jira and an in-house portal into Salesforce, collaborating in an Agile team to build Lightning Web Components and Apex services that cut dashboard load times by ~25% for customers.",
      "Designed and implemented an automated Salesforce case assignment workflow using Apex triggers and handler patterns to update status, enforce ownership rules, and notify external systems via webhooks.",
    ],
  },
  {
    title: "Previous Job Title",
    company: "Previous Company",
    location: "City, State",
    date: "Month Year – Month Year",
    bullets: [
      "Describe what you did or accomplished",
      "Another responsibility or achievement",
      "A third accomplishment or responsibility",
    ],
  },
];

export function Experience() {
  return (
    <div id="experience" className={`${jetbrainsMono.className} flex flex-col gap-10 items-center justify-center px-4 pt-30 pb-20 w-full max-w-4xl`}>
      {/* Header */}
      <div className="flex flex-col items-center justify-center gap-2">
        <h1 className="text-4xl md:text-6xl text-center font-bold">
          Experience
        </h1>
      </div>

      {/* Timeline */}
      <div className="flex flex-col gap-16 w-full">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="relative pl-6 py-6 border-l-2 border-[#e8390d]/40"
          >
            <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-[#e8390d]" />
            <div className="flex flex-col gap-1">
              <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                {exp.title}
              </h2>
              <p className="text-sm sm:text-base text-[#e8390d] font-medium">
                {exp.company} &middot; {exp.location}
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground">
                {exp.date}
              </p>
              <ul className="mt-2 list-disc list-outside pl-5 text-sm sm:text-base text-foreground space-y-2">
                {exp.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
