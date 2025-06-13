import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Mail, MapPin } from "lucide-react";
import { LinkedInLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function ContactMe () {
    return (
        <div className="flex-col space-y-4 pt-4">
            <Separator orientation="horizontal"/>
            <div className="flex justify-center grid grid-cols-7">
                <div className="flex col-span-3 justify-center">
                    <Image
                        src="/file.svg"
                        alt="Person 1"
                        width={175}
                        height={250}
                        className="rounded-full"
                    />
                </div>
                <div className="col-span-2 flex flex-col space-y-2">
                    <p className="text-lg font-bold">
                        My Documents
                    </p>
                    <Button 
                        variant="link" 
                        className="justify-start"
                        style={{ cursor: 'pointer' }}
                    > 
                        Resume 
                    </Button>
                </div>
                <div className="col-span-2 flex flex-col space-y-2">
                    <p className="text-lg font-bold">
                        Contact Me
                    </p>
                    <div className="flex flex-row space-x-2 items-center">
                        <MapPin size={32}/>
                        <div>
                            <p>Location</p>
                            <p className="text-muted-foreground">Auburn, AL</p>
                        </div>
                    </div>
                    <div className="flex flex-row space-x-2 items-center">
                        <Mail size={32}/>
                        <div>
                            <p>Email</p>
                            <p className="text-muted-foreground">codybnic@gmail.com</p>
                        </div>
                    </div>
                    <div className="flex flex-row space-x-2 items-center">
                        <Link href="www.linkedin.com/in/cody-nichols-091431234" passHref>
                            <Button 
                                variant="link"
                                style={{ cursor: 'pointer', padding: 0 }}
                            >
                                <LinkedInLogoIcon style={{ width: 32, height: 32 }}/>
                            </Button>
                        </Link>
                        <div>
                            <p>LinkedIn</p>
                            <p className="text-muted-foreground">www.linkedin.com/in/cody-nichols-091431234</p>
                        </div>
                    </div>
                    <div className="flex flex-row space-x-2 items-center">
                        <Link href="https://github.com/cbn0006" passHref>
                            <Button 
                                variant="link"
                                style={{ cursor: 'pointer', padding: 0 }}
                            >
                                <GitHubLogoIcon style={{ width: 32, height: 32 }}/>
                            </Button>
                        </Link>
                        <div>
                            <p>GitHub</p>
                            <p className="text-muted-foreground">github.com/cbn0006</p>
                        </div>
                    </div>
                </div>
            </div>
            <p className="text-center text-[0.6rem] text-muted-foreground">
                This site was fully developed by Cody Nichols.
            </p>
        </div>
    );
};