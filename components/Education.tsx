import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { educationData } from "@/data/educationData";
import React from 'react';

const DISPLAY_START_YEAR = 2025;
const DISPLAY_END_YEAR = 2016;
const PIXELS_PER_YEAR = 100;

const positionMap: { [key: string]: number } = {
  '3': 2018,
  '2': 2022,
  '1': 2024,
};

type TimelineSlot = {
  year: number;
  item: typeof educationData[0] | null;
};

export default function EducationTimeline() {
  const timelineSlots: TimelineSlot[] = [];
  for (let year = DISPLAY_START_YEAR; year >= DISPLAY_END_YEAR; year--) {
    const matchingItem = educationData.find(edu => positionMap[edu.id] === year);
    timelineSlots.push({ year, item: matchingItem || null });
  }

  return (
    <div className="flex flex-col items-center px-16">
      <span className="text-lg font-semibold">{DISPLAY_START_YEAR}</span>

      <div className="grid grid-cols-[auto_1fr_auto_1fr_auto]">
        {timelineSlots.map(({ year, item }) => {
          const isLeft = item?.side === 'left';
          const cardContent = item ? (
            <Card className="shadow-lg w-72">
              <CardHeader>
                <CardTitle>{item.institution}</CardTitle>
                <CardDescription>{item.degree}</CardDescription>
                <CardDescription className="font-semibold text-gray-600">{item.year}</CardDescription>
              </CardHeader>
              <CardContent>
                {item.gpa && <p className="text-sm font-bold">GPA: {item.gpa}</p>}
                <ul className="list-disc pl-5 mt-2 text-sm text-gray-700">
                  {item.details.map((detail, index) => detail && <li key={index}>{detail}</li>)}
                </ul>
              </CardContent>
            </Card>
          ) : null;

          return (
            <React.Fragment key={year}>
              <div className="flex justify-end items-center" style={{ height: `${PIXELS_PER_YEAR}px` }}>
                {item && isLeft && cardContent}
              </div>

              <div className="flex pt-2 justify-end" style={{ height: `${PIXELS_PER_YEAR}px` }}>
                {item && isLeft && <div className="w-20 h-0.5 bg-gray-400" />}
              </div>

              <div className="flex flex-col items-center" style={{ height: `${PIXELS_PER_YEAR}px` }}>
                <div className="w-4 h-4 bg-blue-600 rounded-full border-2 border-white" />
                {year !== DISPLAY_END_YEAR && <div className="w-0.5 flex-grow bg-gray-300" />}
              </div>

              <div className="flex pt-2 justify-start" style={{ height: `${PIXELS_PER_YEAR}px` }}>
                {item && !isLeft && <div className="w-20 h-0.5 bg-gray-400" />}
              </div>

              <div className="flex justify-start items-center" style={{ height: `${PIXELS_PER_YEAR}px` }}>
                {item && !isLeft && cardContent}
              </div>
            </React.Fragment>
          );
        })}
      </div>

      <span className="text-lg font-semibold -mt-20">{DISPLAY_END_YEAR}</span>
    </div>
  );
}