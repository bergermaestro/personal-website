import Image from "next/image";
import Link from "next/link";
import SolidButton from './Buttons/SolidButton';
import ResumeImage from "../public/images/resume-mockup.png";

const ResumeCard = () => {
    return (
        <div className="inline-flex bg-default-900 rounded-lg shadow-lg my-6">
            <div className='p-4 mx-4 flex items-center'>
                <Image src={ResumeImage}/>
            </div>
            <div className="px-8 py-12 space-y-4 bg-[url('../public/images/resume-background.png')] bg-contain bg-no-repeat bg-opacity-30">
                    <h4 className="uppercase text-xl tracking-wider">File Download</h4>
                    <h2 className="font-bold text-4xl">See My Resume</h2>
                    <SolidButton text="Download Here" path="https://drive.google.com/drive/folders/1010N_deelA4P_IftARIBMAxzVX6rdrF0"/>
            </div>
        </div>

    )
}

export default ResumeCard
