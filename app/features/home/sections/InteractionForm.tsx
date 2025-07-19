import Button from "@/app/shared/buttons/Button";
import Heading from "@/app/shared/heading";
import Img from "@/app/shared/Img";
import Text from "@/app/shared/Text";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const InteractionForm = () => {
  return (
    <div className="bg-btn-primary rounded-[60px] space-y-6 grid lg:grid-cols-2 grid-cols-1 md:pt-8 pt-6 mx-5">
      <div className="space-y-6 md:p-8 p-6">
        <Heading
          variant="white"
          type="medium"
          className="md:text-[56px] text-[40px] md:leading-[60px] leading-[40px]"
        >
          Power up your next framer site with thenty
        </Heading>
        <Text type="light" className="text-white/60" size="lg">
          Authenticate, monetize & launch an advanced website on Framer.
        </Text>
        <Button
          btnName="Get Started"
          variant="secondary"
          onClick={() => {}}
          icon={<MdKeyboardArrowRight size={24} className="text-white" />}
          className="!bg-brand-500 border-transparent !rounded-2xl !py-4 !px-6"
          styleBtnName="!font-medium !text-white"
        />
      </div>
      <div className="md:p-8 p-6 md:m-10 m-6 space-y-8 md:rounded-t-[60px] rounded-t-[32px] bg-white">
        <div className="flex items-center gap-x-4">
          <Img
            src="/images/reliable4.png"
            alt="interactionForm"
            isLocal
            height={58}
            width={58}
            className="h-[58px] w-[58px] rounded-full"
          />
          <div>
            <Heading type="medium" className="text-[24px]">
              Demo Ai Agent
            </Heading>
            <Text type="light" variant="tertiary" size="xl">
              Try Pype AI Voice Assistant
            </Text>
          </div>
        </div>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full h-11 rounded-lg border outline-none p-3"
          />
          <input
            type="text"
            placeholder="Your email"
            className="w-full h-11 rounded-lg border outline-none p-3"
          />
          <input
            type="text"
            placeholder="Your phone"
            className="w-full h-11 rounded-lg border outline-none p-3"
          />
          <div className="flex items-center gap-x-2">
            <input
              type="checkbox"
              placeholder="Enter your email"
              className="cursor-pointer h-4 w-4"
            />
            <Text type="light" className="text-gray-500">
              You agree to our friendly{" "}
              <span className="underline">privacy policy</span>.
            </Text>
          </div>
        </div>
        <Button
          btnName="Get Callback"
          variant="secondary"
          onClick={() => {}}
          icon={<MdKeyboardArrowRight size={24} className="text-white" />}
          className="!bg-btn-primary !rounded-2xl !py-4 !px-6"
          styleBtnName="!font-medium !text-white"
        />
      </div>
    </div>
  );
};

export default InteractionForm;
