"use client";

import {Button} from "@/components/ui/button";
import {Separator} from "@/components/ui/separator";
import { GitHubLogoIcon, LinkedInLogoIcon, CodeIcon, PersonIcon } from '@radix-ui/react-icons';
import { GraduationCap, BriefcaseBusiness, Mail, LaptopMinimalCheck } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
    return (
        <div className="sticky top-0 z-50 flex flex-col bg-background">
            <div className="flex p-2">
                <div className="flex-1"></div>
                <div className="flex justify-center flex-grow-0">
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
                <div className="flex flex-1 justify-end">
                    <Link href="mailto:your_email@example.com" passHref>
                        <Button variant="ghost" style={{ cursor: 'pointer' }}>
                            <Mail />
                        </Button>
                    </Link>
                    <Link href="https://github.com/cbn0006" passHref>
                        <Button variant="ghost" style={{ cursor: 'pointer' }}>
                            <GitHubLogoIcon />
                        </Button>
                    </Link>
                    <Link href="https://www.linkedin.com/in/cody-nichols-091431234" passHref>
                        <Button variant="ghost" style={{ cursor: 'pointer' }}>
                            <LinkedInLogoIcon />
                        </Button>
                    </Link>
                </div>
            </div>
            <Separator orientation="horizontal" />
        </div>
    );
}