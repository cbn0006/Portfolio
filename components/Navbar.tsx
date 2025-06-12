"use client";

import {Button} from "@/components/ui/button";
import {Separator} from "@/components/ui/separator";
import { GitHubLogoIcon, LinkedInLogoIcon, CodeIcon, PersonIcon } from '@radix-ui/react-icons';
import { GraduationCap, BriefcaseBusiness, Mail, LaptopMinimalCheck } from "lucide-react";
import Link from 'next/link';

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
                <div className="flex flex-row justify-end space-x-2">
                    <Link href="www.linkedin.com/in/cody-nichols-091431234" passHref>
                        <Button variant="ghost"><LinkedInLogoIcon /></Button>
                    </Link>
                    <Link href="https://github.com/codybnic" passHref>
                        <Button variant="ghost"><GitHubLogoIcon /></Button>
                    </Link>
                </div>
            </div>
            <Separator orientation="horizontal" />
        </div>
    );
}