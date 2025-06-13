"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { experienceData } from "@/data/experienceData";

export default function Experience() {
  return (
    <div className="flex flex-col items-center space-y-4">
      <h2 className="text-3xl font-bold">Work Experience</h2>
      <ScrollArea className="w-full h-[700px]">
        {/* This div applies the fade-out effect */}
        <div className="p-4 [mask-image:_linear-gradient(to_bottom,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
          <Table>
            <TableBody>
              {experienceData.map((exp) => (
                <TableRow key={exp.id}>
                  <TableCell className="p-2">
                    <Card className="h-[400px] shadow-md">
                      <CardHeader>
                        <CardTitle className="text-2xl">{exp.role}</CardTitle>
                        <CardDescription className="text-md font-semibold">
                          {exp.company} &bull; {exp.location}
                        </CardDescription>
                        <CardDescription>{exp.duration}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="list-disc space-y-2 pl-5">
                          {exp.details.map((detail, index) => (
                            <li key={index}>{detail}</li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </ScrollArea>
    </div>
  );
}