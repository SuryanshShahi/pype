import CardWrapper from "@/app/shared/CardWrapper";
import Heading from "@/app/shared/heading";
import ContentHeader from "@/app/shared/heading/ContentHeader";
import Img from "@/app/shared/Img";
import Text from "@/app/shared/Text";
import clsx from "clsx";
import React from "react";
import { FaPlay } from "react-icons/fa";
import { LuPhoneCall } from "react-icons/lu";
const RenderBtn = ({ type = "play" }: { type?: "call" | "play" }) => (
  <CardWrapper className="flex items-center gap-x-4 bg-white/50 backdrop-blur-[10px] !border-none w-full cursor-pointer">
    <div
      className={clsx(
        "h-10 w-10 rounded-full flex items-center justify-center",
        type === "call" ? "bg-success-400" : "bg-brand-500"
      )}
    >
      {type === "call" ? (
        <LuPhoneCall className="text-white" size={20} />
      ) : (
        <FaPlay className="text-white -mr-[2px]" size={14} />
      )}
    </div>
    <div>
      {type === "call" ? (
        <Heading variant="black" className="text-lg">
          Talk To Agent
        </Heading>
      ) : (
        <Img
          src="/images/aiAction/playAudio.png"
          alt="play"
          height={30}
          width={190}
          isLocal
        />
      )}
      <Text variant="black" type="light">
        Clinic Front Desk
      </Text>
    </div>
  </CardWrapper>
);
const AiAtWork = () => {
  return (
    <div className="space-y-12 mx-5">
      <ContentHeader
        title="Discover Pype AI at Work"
        description="Experience real-time calls with Pype AI’s voice agents, seamlessly handling inquiries, lead qualification, appointment booking, and support resolution."
        sectionTitle="PYPE AI - IN ACTION"
      />
      <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
        <div className="flex flex-col relative md:p-10 sm:p-6 p-8 bg-[url('/images/aiAction/action1.png')] rounded-[42px] min-h-[500px] h-full w-full bg-cover bg-center bg-no-repeat">
          <div>
            <Heading
              className="md:text-[40px] md:leading-[48px] text-[32px]"
              type="medium"
            >
              Healthcare
            </Heading>
            <Text size="xl" variant="deep-violet" className="max-w-[350px]">
              Patient support and appointment scheduling.
            </Text>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-auto -m-3">
            <RenderBtn type="call" />
            <RenderBtn />
          </div>
        </div>
        <div className="flex md:flex-col sm:flex-row flex-col justify-between gap-10">
          <div className="flex flex-col relative md:p-10 sm:p-6 p-8 bg-[url('/images/aiAction/action2.png')] rounded-[40px] sm:h-[330px] h-[500px] w-full bg-cover bg-center bg-no-repeat">
            <div>
              <Heading
                className="md:text-[40px] md:leading-[48px] text-[32px]"
                type="medium"
              >
                Real Estate
              </Heading>
              <Text size="xl" variant="deep-violet" className="max-w-[350px]">
                Client inquiries, property tours, and seamless follow-ups
              </Text>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-auto -m-3">
              <RenderBtn type="call" />
              <RenderBtn />
            </div>
          </div>
          <div className="flex flex-col relative md:p-10 sm:p-6 p-8 bg-[url('/images/aiAction/action3.png')] rounded-[40px] sm:h-[330px] h-[500px] w-full bg-cover bg-center bg-no-repeat">
            <div>
              <Heading
                className="md:text-[40px] md:leading-[48px] text-[32px]"
                type="medium"
              >
                Healthcare
              </Heading>
              <Text size="xl" variant="deep-violet" className="max-w-[350px]">
                Patient support and appointment scheduling.
              </Text>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-auto -m-3">
              <RenderBtn type="call" />
              <RenderBtn />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiAtWork;
