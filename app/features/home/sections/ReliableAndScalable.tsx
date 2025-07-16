import Divider from "@/app/shared";
import Button from "@/app/shared/buttons/Button";
import CardWrapper from "@/app/shared/CardWrapper";
import Heading from "@/app/shared/heading";
import ContentHeader from "@/app/shared/heading/ContentHeader";
import Img from "@/app/shared/Img";
import Text from "@/app/shared/Text";
import { SvgSaved } from "@/app/svgs";
import clsx from "clsx";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoDocumentTextOutline } from "react-icons/io5";
import { LuClock3 } from "react-icons/lu";

const ReliableAndScalable = () => {
  return (
    <div className="bg-header-gradient space-y-6 mx-5">
      <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-10">
        <ContentHeader
          title="AI agents you can trust. Deploy with confidence."
          sectionTitle="Reliable and Scalable"
          className="!items-start"
        />
        <div></div>
        <div className="p-10 rounded-[42px] bg-header-gradient space-y-6">
          <Text size="xl" type="light" variant="deep-violet">
            01
          </Text>
          <div className="grid md:grid-cols-2 grid-cols-1 items-end gap-4">
            <Heading className="text-[32px] leading-8" type="medium">
              Scheduled outreach made simple
            </Heading>
            <Text type="light">
              Plan follow-ups, product launches, and reminders without writing a
              single prompt.
            </Text>
          </div>
          <Divider />
          <CardWrapper className="!rounded-[32px] !p-8 space-y-14">
            <div className="border-2 border-dashed border-twilight-blue/20 rounded-[32px]">
              <div className="space-y-4 -rotate-[8deg] bg-white shadow-card rounded-[32px] p-6 -mt-5 w-[90%]">
                <div className="flex items-center justify-between gap-x-4">
                  <div className="flex items-center gap-x-4">
                    <div className="h-14 w-14 rounded-full bg-orange-500" />
                    <Heading type="medium" className="text-[24px]">
                      John Doe
                    </Heading>
                  </div>
                  <div className="flex items-center justify-center border border-dashed rounded-full w-14 h-14 rotate-[5deg]">
                    <SvgSaved />
                  </div>
                </div>
                <div className="flex items-center gap-x-2">
                  <Button
                    btnName="Lorem"
                    size="sm"
                    variant="secondary"
                    className="px-4 py-1 !rounded-full"
                  />
                  <Button
                    btnName="Ipsum"
                    size="sm"
                    variant="secondary"
                    className="px-4 py-1 !rounded-full"
                  />
                  <Button
                    btnName="5+"
                    className="bg-btn-primary px-4 py-1 !rounded-full"
                    size="sm"
                  />
                </div>
              </div>
            </div>
            <Text type="light">
              In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
              Nullam dictum felis eu pede mollis pretium. Integer tincidunt.
              Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate
              eleifend
            </Text>
            <div className="flex items-center justify-between !mt-8">
              {[
                {
                  label: "lorem Ipsum",
                  icon: <IoDocumentTextOutline className="text-deep-violet" />,
                },
                {
                  label: "5 Days left",
                  icon: <LuClock3 className="text-deep-violet" />,
                },
                {
                  label: "USA, California",
                  icon: (
                    <HiOutlineLocationMarker className="text-deep-violet" />
                  ),
                },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-x-2">
                  {item.icon}
                  <Text type="medium" size="sm" variant="deep-violet">
                    {item.label}
                  </Text>
                </div>
              ))}
            </div>
          </CardWrapper>
        </div>
        <div className="p-4 rounded-[42px] space-y-6 bg-white">
          <div className="space-y-6 p-8">
            <Text size="xl" type="light" variant="deep-violet">
              02
            </Text>
            <div className="grid md:grid-cols-2 grid-cols-1 items-end gap-4">
              <Heading className="text-[32px] leading-8" type="medium">
                AI handles 80% of incoming queries
              </Heading>
              <Text type="light">
                Support customers with live voice agents that can book, answer,
                or route calls.
              </Text>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-4 justify-center">
            {["Lorem Ipsum", "Donec sodales", "Lorem Ipsum"].map(
              (item, idx) => (
                <Button
                  key={idx}
                  btnName={item}
                  size="sm"
                  variant="secondary"
                  styleBtnName="text-twilight-blue"
                  className="!px-6 py-1 !rounded-full"
                />
              )
            )}
          </div>
          <CardWrapper className="!rounded-[32px] !p-8 space-y-14 bg-header-gradient">
            <Img
              src="/images/reliable2.png"
              alt="reliable2"
              width={600}
              height={400}
              isLocal
            />
          </CardWrapper>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {[
          {
            title: "Your calls are your prompts",
            description:
              "No prompt-writing needed. We train your voice AI directly on your recordings.",
            details: [
              {
                title: "Nam quam nunc",
                description:
                  "No prompt-writing needed. We train your voice AI directly on your recordings.",
              },
              {
                title: "Nam quam nunc",
                description:
                  "No prompt-writing needed. We train your voice AI directly on your recordings.",
              },
            ],
            children: (
              <div className="p-2 rounded-[32px] bg-header-gradient">
                <Img
                  src="/images/reliable3.png"
                  alt="reliable3"
                  width={366}
                  height={320}
                  isLocal
                  //   className="w-full h-full"
                />
              </div>
            ),
          },
          {
            title: "One workflow. Endless outreach.",
            description:
              "Vivamus elementum semper nisi. Aenean vulputate eleifend",
            className: "bg-btn-primary",
            details: [
              {
                title: "One workflow",
                description:
                  "Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend",
              },
            ],
            children: (
              <Img
                src="/images/reliable4.png"
                alt="reliable3"
                width={366}
                height={317}
                isLocal
                className="w-full h-full -ml-1"
              />
            ),
          },
          {
            title: "Whitelabel Calling Numbers",
            description:
              "Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend",
            details: [
              {
                title: "Lorem Ipsum",
                description: "",
              },
              {
                title: "Lorem Ipsum",
                description: "",
              },
            ],
            children: (
              <Img
                src="/images/reliable6.png"
                alt="reliable3"
                width={366}
                height={333}
                isLocal
                className="w-full h-full object-cover"
              />
            ),
          },
        ].map((item, idx) => (
          <div
            className={clsx(
              "space-y-8 bg-white rounded-[42px] py-6 px-4 h-max",
              item.className
            )}
            key={idx}
          >
            <div className="flex gap-x-4 p-4">
              <div
                className={clsx(
                  "h-11 min-w-11 rounded-full border border-secondary flex items-center justify-center font-medium",
                  idx === 1 && "!text-white"
                )}
              >
                05
              </div>
              <div className="space-y-4">
                <Heading
                  className={clsx(
                    "text-[32px] leading-8",
                    idx === 1 && "!text-white/80"
                  )}
                  type="medium"
                >
                  {item.title}
                </Heading>
                <Text
                  type="light"
                  className={clsx(idx === 1 && "!text-white/60")}
                >
                  {item.description}
                </Text>
              </div>
            </div>
            <div className="flex flex-wrap gap-x-10 px-4">
              {item.details.map((item, idx) => (
                <div className="flex gap-x-3" key={idx}>
                  <div className="text-deep-violet mt-[6px] h-[14px] min-w-[14px] rounded-full bg-twilight-blue flex items-center justify-center">
                    <Text variant="white" className="-mt-[3px]">
                      •
                    </Text>
                  </div>
                  <div className="space-y-3">
                    <Heading className={clsx(idx === 1 && "!text-white/80")}>
                      {item.title}
                    </Heading>
                    {item?.description && (
                      <Text
                        type="light"
                        className={clsx(idx === 1 && "!text-white/60")}
                      >
                        {item?.description}
                      </Text>
                    )}
                  </div>
                </div>
              ))}
            </div>
            {item.children}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReliableAndScalable;
