'use client';

import React from 'react';
import { jetbrainsMono } from '@/app/font';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    title: "Software Engineer Intern",
    company: "Sela Cloud",
    location: "Remote",
    date: "January 2026 – March 2026",
    bullets: [
      "Developed an AWS pipeline using TypeScript and Lambda to normalize client billing data and load it into an Amazon Redshift data warehouse, replacing a paid vendor and cutting the team's tooling costs by 15%.",
      "Engineered a Salesforce portal with Lightning Web Components and Apex services, replacing a legacy client dashboard and giving clients real-time visibility into cloud-spend data while cutting load times by ~50%.",
      "Built a ticket management system within the Salesforce portal using Apex triggers and handler patterns, allowing clients to submit requests and replacing a manual process where employees logged tickets in Jira.",
    ],
  },
  {
    title: "Vice President & Front-End Engineer",
    company: "Computer Science and AI Club",
    location: "West Windsor, New Jersey",
    date: "May 2025 – May 2026",
    bullets: [
      "Designed and facilitated a hands-on workshop teaching 20 students to leverage AI tools to build and ship personal portfolio websites from scratch, achieving a 100% success rate with each student building a fully deployed site.",
      "Engineered and maintained the CS Club’s website using HTML, CSS, and JavaScript, collaborating with student engineers to design new features and improve overall functionality for 50+ student members.",
      "Integrated a Google Apps Script backend to process membership sign-ups directly from the site, automatically recording submissions in Google Sheets and reducing manual admin work for officers by 80%.",
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
