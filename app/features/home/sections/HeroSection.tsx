import Button from "@/app/shared/buttons/Button";
import CardWrapper from "@/app/shared/CardWrapper";
import Heading from "@/app/shared/heading";
import Img from "@/app/shared/Img";
import Text from "@/app/shared/Text";
import { SvgWave } from "@/app/svgs";
import { BsStars } from "react-icons/bs";
import { IoIosTrendingUp } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";

const HeroSection = () => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-10 px-5 items-center">
      <div className="space-y-6">
        <div className="flex items-center gap-x-3">
          <div className="bg-white h-10 min-w-10 rounded-full flex items-center justify-center">
            <BsStars size={20} className="text-brand-tertiary" />
          </div>
          <Text size="lg" variant="deep-violet" type="light">
            The{" "}
            <span className="text-deep-violet font-medium">AI solution</span>{" "}
            businesses rely on for excellence.
          </Text>
        </div>
        <Heading
          type="medium"
          className="md:text-[64px] text-[40px] md:leading-[76px] leading-[50px]"
        >
          Next-Gen Voice AI Redefining Customer Communication
        </Heading>
        <Text size="lg" variant="deep-violet" type="light" className="max-w-[500px]">
          Enterprise-grade AI voice agents that automate calls, streamline
          operations, and elevate customer experiences. Delivering exceptional
          service 24/7.
        </Text>
        <div className="flex items-center gap-x-4">
          <Button
            btnName="Request Demo"
            onClick={() => {}}
            className="bg-btn-primary !rounded-2xl !py-4 !px-6"
            styleBtnName="!font-medium"
          />
          <Button
            btnName="Contact Us"
            onClick={() => {}}
            icon={
              <MdKeyboardArrowRight size={24} className="text-violet-900" />
            }
            variant="secondary"
            className="!rounded-2xl !py-4 !px-6"
            styleBtnName="!text-violet-900 !font-medium"
          />
        </div>
        <div className="flex items-center py-1 pl-1 pr-4 bg-[#F7FEE8] w-max rounded-full gap-x-3 animate-pulse !mt-10">
          <div className="bg-white py-1 px-4 rounded-full text-sm font-medium text-[#567B24] border border-[#ECFDCD]">
            <span className="text-[#ACF648] text-xl leading-none blur-[1px]">
              •{" "}
            </span>
            Update
          </div>
          <Text type="medium" variant="[#567B24]" size="sm">
            We Are launching on Salesforce
          </Text>
        </div>
      </div>
      <div className="flex items-center justify-center gap-x-4 relative max-w-[600px] w-full mx-auto mt-6">
        <SvgWave className="absolute top-[20%] -right-16 -right[20%] animate-pulse" />
        <Img
          alt="logo"
          src="/images/heroVideo.gif"
          isLocal
          height={600}
          width={350}
          className="h-[650px] z-10 animate-bottom"
        />
        <CardWrapper className="!py-3 absolute left-[5%] top-[15%] shadow-card sm:block hidden z-[11] animate-slide">
          <Heading variant="twilight-blue">Engagement</Heading>
          <Text
            type="medium"
            size="2xl"
            className="flex items-center w-max gap-x-2 !text-brand-500"
          >
            <IoIosTrendingUp size={24} className="ml-auto" />
            10X
          </Text>
        </CardWrapper>
        <CardWrapper className="!py-3 absolute -right-[4%] top-[60%] shadow-card sm:block hidden z-[11] animate-slideLeft">
          <Heading variant="twilight-blue" className="text-nowrap">
            Lead Qualification
          </Heading>
          <Text
            type="medium"
            size="2xl"
            className="flex items-center w-max gap-x-2 !text-brand-500"
          >
            <IoIosTrendingUp size={24} className="ml-auto" />
            5X Faster
          </Text>
          <Img
            src="/images/users.png"
            alt="logo"
            isLocal
            height={30}
            width={150}
          />
        </CardWrapper>
      </div>
    </div>
  );
};

export default HeroSection;
