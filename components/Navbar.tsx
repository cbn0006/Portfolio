"use client";

import {Button} from "@/components/ui/button";
import {Separator} from "@/components/ui/separator";
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

export default function Navbar() {
    return (
        <div className="flex flex-1 flex-col">
            <div className="flex flex-1 p-2">
                <div className="flex flex-1 justify-center">
                    <Button variant="ghost" style={{ cursor: 'pointer' }}>About Me</Button>
                    <Button variant="ghost" style={{ cursor: 'pointer' }}>Education</Button>
                    <Button variant="ghost" style={{ cursor: 'pointer' }}>Experience</Button>
                    <Button variant="ghost" style={{ cursor: 'pointer' }}>Projects</Button>
                    <Button variant="ghost" style={{ cursor: 'pointer' }}>Contact Me</Button>
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