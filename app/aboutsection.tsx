import { HeadingDivider } from "./ui/HeadingDivider"
import Image from 'next/image'

export default function AboutSection(){
    return (
        <div className="mt-10 md:mt-20">
            <HeadingDivider title="About Me"/>
            <div className="pt-10 pb-16 max-w-5xl flex flex-col gap-3">
                <p className="text-lg"> I also like 40k </p>
                <img src="/public/SM2.jpg" width="250" height="250" alt="Space Marine 2 Cover Art" />

                <p>
                    The new game was pretty cool<br />
                </p>

            </div>
        </div>
    )
}
