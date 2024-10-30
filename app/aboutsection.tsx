import { HeadingDivider } from "./ui/HeadingDivider"
import Image from 'next/image'

export default function AboutSection(){
    return (
        <div className="mt-10 md:mt-20">
            <HeadingDivider title="About Me"/>
            <div className="pt-10 pb-16 max-w-5xl flex flex-col gap-3">
                <p className="text-lg"> I also like computers. So much so that I majored in CS! </p>
                <p>
                    I also love movies like Dune!<br />
                </p>

            </div>
        </div>
    )
}
