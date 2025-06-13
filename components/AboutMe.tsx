import Image from "next/image";

export default function AboutMe () {
    return (
        <div className="flex grid grid-cols-2 gap-x-8 py-8">
            <Image
                src="/file.svg"
                alt="Person 1"
                width={250}
                height={350}
                className="flex rounded-full justify-self-end"
            />
            <div>
                <p className="font-bold text-xl">
                    Description
                </p>
                <p>
                    Desc
                </p>
            </div>
        </div>
    );
}