import Button from "@/app/shared/buttons/Button";
import CardWrapper from "@/app/shared/CardWrapper";
import Heading from "@/app/shared/heading";
import Img from "@/app/shared/Img";
import Text from "@/app/shared/Text";
import { BsStars } from "react-icons/bs";
import { IoIosTrendingUp } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";

const HeroSection = () => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-10 px-5">
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
        <Text size="lg" variant="deep-violet" type="light">
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
      </div>
      <div className="flex items-center justify-center gap-x-4 relative max-w-[600px] w-full mx-auto">
        <Img
          alt="logo"
          src="/images/heroImage.png"
          isLocal
          height={600}
          width={350}
        />
        <CardWrapper className="!py-3 absolute left-[11%] top-[30%]">
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
        <CardWrapper className="!py-3 absolute right-2 top-[60%]">
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
