import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { MapPin } from "lucide-react";


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
                    <Button 
                        variant="ghost" 
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
                    <div className="flex flex-row space-x-1 items-center">
                        <MapPin />
                        <div>
                            <p>Location</p>
                            <p className="text-muted-foreground">Auburn, AL</p>
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