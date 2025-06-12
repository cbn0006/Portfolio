import Image from "next/image";

export default function AboutMe () {
    return (
        <div className="flex flex-row justify-center">
            <Image
                src="/file.svg"
                alt="Person 1"
                width={250}
                height={350}
                className="rounded-full"
            />
            <p>
                Description
            </p>
        </div>
    );
}