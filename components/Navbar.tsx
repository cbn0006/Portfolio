"use client";

import {Button} from "@/components/ui/button";
import {Separator} from "@/components/ui/separator";
import { CodeIcon, PersonIcon } from '@radix-ui/react-icons';
import { GraduationCap, BriefcaseBusiness, Mail, LaptopMinimalCheck } from "lucide-react";

export default function Navbar() {
    return (
        <div className="flex flex-col">
            <div className="flex flex-1 p-2">
                <div className="flex flex-1 justify-center">
                    <Button variant="ghost" style={{ cursor: 'pointer' }}> 
                        <PersonIcon />
                        About Me
                    </Button>
                    <Button variant="ghost" style={{ cursor: 'pointer' }}>
                        <GraduationCap />
                        Education
                    </Button>
                    <Button variant="ghost" style={{ cursor: 'pointer' }}>
                        <BriefcaseBusiness />
                        Experience
                    </Button>
                    <Button variant="ghost" style={{ cursor: 'pointer' }}>
                        <CodeIcon />
                        Skills
                    </Button>
                    <Button variant="ghost" style={{ cursor: 'pointer' }}>
                        <LaptopMinimalCheck />
                        Projects
                    </Button>
                    <Button variant="ghost" style={{ cursor: 'pointer' }}>
                        <Mail />
                        Contact Me
                    </Button>
                </div>
            </div>
            <Separator orientation="horizontal" />
        </div>
    );
}