import Divider from "@/app/shared";
import Button from "@/app/shared/buttons/Button";
import CardWrapper from "@/app/shared/CardWrapper";
import Heading from "@/app/shared/heading";
import ContentHeader from "@/app/shared/heading/ContentHeader";
import Img from "@/app/shared/Img";
import { Modal } from "@/app/shared/Modal";
import Text from "@/app/shared/Text";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";
import { LuPhoneCall } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import { VscCallIncoming } from "react-icons/vsc";
const RenderBtn = ({
  type = "play",
  data,
  onClick,
  isPlaying,
}: {
  type?: "call" | "play";
  data: {
    title?: string;
    description: string;
  };
  onClick?: () => void;
  isPlaying?: boolean;
}) => {
  const defaultHeights = [
    30, 22, 20, 22, 30, 16, 9, 13, 17, 25, 20, 25, 30, 17, 30, 16, 9, 13, 17,
    25, 30, 25, 17,
  ];
  const [shuffledHeights, setShuffledHeights] = useState(defaultHeights);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setShuffledHeights((prev) => {
          const newArray = [...prev];
          for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
          }
          return newArray;
        });
      }, 200);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <CardWrapper
      className="flex items-center gap-x-4 bg-white/50 backdrop-blur-[10px] !border-none w-full cursor-pointer"
      onClick={() => type === "call" && onClick?.()}
    >
      <div
        className={clsx(
          "h-10 w-10 rounded-full flex items-center justify-center",
          type === "call" ? "bg-success-400" : "bg-brand-500"
        )}
        onClick={onClick}
      >
        {type === "call" ? (
          <LuPhoneCall className="text-white" size={20} />
        ) : (
          <div className="relative flex items-center justify-center">
            <FaPlay
              className={clsx(
                "text-white -mr-[2px] duration-300 absolute",
                !isPlaying ? "h-[14px]" : "h-0"
              )}
            />
            <FaPause
              className={clsx(
                "text-white duration-300 absolute",
                isPlaying ? "h-[14px]" : "h-0"
              )}
            />
          </div>
        )}
      </div>
      <div>
        {data.title && type === "call" ? (
          <Heading variant="black" className="text-lg">
            {data.title}
          </Heading>
        ) : (
          <div className="flex items-center gap-x-1 h-[30px]">
            {(isPlaying ? shuffledHeights : defaultHeights).map((item, idx) => (
              <div
                key={idx}
                className="w-1 rounded-full bg-brand-500/40 transition-all duration-300 ease-in-out"
                style={{ height: item }}
              />
            ))}
          </div>
        )}
        <Text variant="black" type="light">
          {data.description}
        </Text>
      </div>
    </CardWrapper>
  );
};
const AiAtWork = () => {
  const [isPlaying, setIsPlaying] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="space-y-12 mx-5">
        <ContentHeader
          title="Discover Pype AI at Work"
          description="Experience real-time calls with Pype AI’s voice agents, seamlessly handling inquiries, lead qualification, appointment booking, and support resolution."
          sectionTitle="PYPE AI - IN ACTION"
        />
        <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
          <div className="flex flex-col relative md:p-10 sm:p-6 p-8 bg-[url('/images/aiAction/action1.png')] rounded-[42px] min-h-[500px] h-full w-full bg-cover bg-center bg-no-repeat">
            <div className="bg-ai-action absolute inset-0 rounded-[42px] w-full h-full" />
            <div>
              <Heading
                className="md:text-[40px] md:leading-[48px] text-[32px]"
                type="medium"
              >
                Healthcare
              </Heading>
              <Text size="xl" variant="deep-violet" className="max-w-[320px]">
                Patient support and appointment scheduling.
              </Text>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-auto -m-3">
              <RenderBtn
                type="call"
                data={{
                  title: "Talk To Agent",
                  description: "Clinic Front Desk",
                }}
                onClick={() => setIsOpen(true)}
              />
              <RenderBtn
                data={{ description: "Listen to Demo" }}
                onClick={() =>
                  setIsPlaying(isPlaying === "action1" ? "" : "action1")
                }
                isPlaying={isPlaying === "action1"}
              />
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
                <RenderBtn
                  type="call"
                  onClick={() => setIsOpen(true)}
                  data={{
                    title: "Talk To Agent",
                    description: "Real Estate Broker",
                  }}
                />
                <RenderBtn
                  data={{ description: "Listen to Demo" }}
                  onClick={() =>
                    setIsPlaying(isPlaying === "action2" ? "" : "action2")
                  }
                  isPlaying={isPlaying === "action2"}
                />
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
                <RenderBtn
                  type="call"
                  onClick={() => setIsOpen(true)}
                  data={{
                    title: "Talk To Agent",
                    description: "Bank Customer Support",
                  }}
                />
                <RenderBtn
                  data={{ description: "Listen to Demo" }}
                  onClick={() =>
                    setIsPlaying(isPlaying === "action3" ? "" : "action3")
                  }
                  isPlaying={isPlaying === "action3"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={isOpen}
        close={() => setIsOpen(false)}
        className="p-5 relative"
        size="md"
      >
        <RxCross2
          className="absolute top-4 right-4 text-black cursor-pointer"
          size={24}
          onClick={() => setIsOpen(false)}
        />

        <div className="flex flex-col justify-center items-center gap-4">
          <div className="gap-y-4 flex flex-col items-center">
            <div className="flex items-center gap-x-2">
              <Img
                alt="logo"
                src="/images/logo.png"
                isLocal
                height={36}
                width={22}
                role="button"
                onClick={() => {}}
              />
              <Heading className="text-[26px] !font-semibold">Pype</Heading>
            </div>
            <Heading className="text-[40px] leading-[40px]">
              Talk to Agent Now!
            </Heading>
            <Text className="text-center" size="lg">
              Our AI voice agent is ready to talk. Let’s set up the call.
            </Text>
          </div>
          <Divider />
          <div className="space-y-4 w-full">
            {[
              {
                label: "What should we call you?",
                placeholder: "Enter your Name",
                type: "text",
              },
              {
                label: "Your Phone Number",
                placeholder: "Enter your Phone Number",
                type: "text",
              },
              {
                label: "Your Email",
                placeholder: "Enter your Email",
                type: "email",
              },
            ].map((item, idx) => (
              <div key={idx} className="space-y-2">
                <label className="text-sm font-medium text-gray-500">
                  {item.label}
                </label>
                <input
                  type={item.type}
                  placeholder={item.placeholder}
                  className="w-full h-11 rounded-lg border outline-none p-3"
                />
              </div>
            ))}
          </div>
          <Button
            btnName="Get a Call"
            styleBtnName="font-normal"
            className="!rounded-3xl !py-4 !mt-6"
            fullWidth
            iconFirst
            icon={<VscCallIncoming size={18} />}
          />
        </div>
      </Modal>
    </>
  );
};

export default AiAtWork;
