import { HeadingDivider } from "./ui/HeadingDivider"
import Image from 'next/image'
import SocialLinks from "./ui/socialslinks"

export default function AboutSection(){
    return (
        <div className="mt-10 md:mt-20">
            <HeadingDivider title="About Me"/>
            <div className="pt-10 pb-16 max-w-5xl flex flex-col gap-3 text-lg">
                <p> 
                    I also like computers. So much so that I majored in CS!
                    I also love movies like Dune! 
                </p>
                <p>
                    Heres some of my socials you can click: 
                    <SocialLinks />
                </p>

            </div>
        </div>
    )
}
