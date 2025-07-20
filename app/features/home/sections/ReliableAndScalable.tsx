import Divider from "@/app/shared";
import Button from "@/app/shared/buttons/Button";
import CardWrapper from "@/app/shared/CardWrapper";
import Heading from "@/app/shared/heading";
import ContentHeader from "@/app/shared/heading/ContentHeader";
import Img from "@/app/shared/Img";
import Text from "@/app/shared/Text";
import { SvgSaved } from "@/app/svgs";
import clsx from "clsx";

const ReliableAndScalable = () => {
  return (
    <div className="space-y-6 mx-5 relative">
      <ContentHeader
        title="AI agents you can trust."
        description="Deploy with confidence."
        styleDescription="md:!text-[56px] !text-[40px] md:!leading-[67px] !leading-[50px] !text-deep-violet !font-medium sm:!-mt-4 !-mt-5"
        sectionTitle="Reliable and Scalable"
        className="mx-auto !mb-16"
      />
      <div className="grid md:grid-cols-2 grid-cols-1 items-center sm:gap-10 gap-5">
        <div className="md:p-10 p-4 rounded-[42px] bg-header-gradient space-y-6 shadow-card h-full">
          <div className="space-y-6 md:p-0 p-4">
            <Text size="xl" type="light" variant="deep-violet">
              01
            </Text>
            <div className="grid md:grid-cols-2 grid-cols-1 items-end gap-4">
              <Heading className="text-[32px] leading-8" type="medium">
                Scheduled outreach made simple
              </Heading>
              <Text type="light">
                Automated calls triggered by customer events and interactions
              </Text>
            </div>
          </div>
          <Divider />
          <CardWrapper className="!rounded-[32px] md:!p-8 !p-6 space-y-14">
            <div className="border-2 border-dashed border-twilight-blue/20 rounded-[32px]">
              <div className="space-y-4 -rotate-[8deg] bg-white shadow-card rounded-[32px] p-6 -mt-5">
                <div className="flex items-center justify-between gap-x-4">
                  <div className="flex itemscenter gap-x-4">
                    <div className="h-14 min-w-14 rounded-full bg-brand-500">
                      <Img
                        src="/images/circleBlack.png"
                        alt="reliable1"
                        width={56}
                        height={56}
                        isLocal
                        className="w-full h-full"
                      />
                    </div>
                    <div>
                      <Heading type="medium" className="text-[24px] sm:text-nowrap">
                        Squareyards Leads
                      </Heading>
                      <Text type="light">Trigger: Lead registration</Text>
                    </div>
                  </div>
                  <div className="flex items-center justify-center border border-dashed rounded-full min-w-14 h-14 rotate-[5deg]">
                    <SvgSaved />
                  </div>
                </div>
                <div className="flex items-center gap-x-2">
                  <Button
                    btnName="156 triggers"
                    size="sm"
                    variant="secondary"
                    className="!px-4 !py-[6px] !rounded-full"
                  />
                  <Button
                    btnName="57%"
                    size="sm"
                    variant="secondary"
                    className="!px-4 !py-1 !rounded-full !border-success-500"
                  />
                  <Button
                    btnName="Active"
                    className="bg-btn-primary !px-4 !py-[6px] !rounded-full"
                    size="sm"
                  />
                </div>
              </div>
            </div>
            <Text type="light">
              Reach customers automatically when they fill a form, miss a call,
              or complete a key action. Schedule follow-ups, reminders, and
              campaigns—without lifting a finger.
            </Text>
            <div className="flex items-center justify-between !mt-8">
              {[
                {
                  label: "Active Sequences: ",
                  value: "2",
                  // icon: <IoDocumentTextOutline className="text-deep-violet" />,
                },
                {
                  label: "Total Triggers: ",
                  value: "359",
                  // icon: <LuClock3 className="text-deep-violet" />,
                },
                {
                  label: "Avg Success Rate: ",
                  value: "62%",
                  // icon: (
                  //   <HiOutlineLocationMarker className="text-deep-violet" />
                  // ),
                },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-x-2">
                  {/* {item.icon} */}
                  <Text type="light" size="sm" variant="deep-violet">
                    {item.label}
                    <span className="text-deep-violet font-semibold">
                      {item.value}
                    </span>
                  </Text>
                </div>
              ))}
            </div>
          </CardWrapper>
        </div>
        <div className="p-4 rounded-[42px] space-y-6 bg-white shadow-card h-full">
          <div className="space-y-6 md:p-8 p-4">
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
            {[
              {
                label: "Calls Today:",
                value: "77",
              },
              {
                label: "Active Agents:",
                value: "2",
              },
              {
                label: "Avg Time:",
                value: "1:34min",
              },
            ].map((item, idx) => (
              <Button
                key={idx}
                btnName={
                  (
                    <div className="flex items-center gap-x-2">
                      <Text type="light" size="sm">
                        {item.label}
                      </Text>
                      <Text type="semibold" size="sm" variant="deep-violet">
                        {item.value}
                      </Text>
                    </div>
                  ) as any
                }
                size="sm"
                variant="secondary"
                styleBtnName="text-twilight-blue"
                className="!px-6 py-1 !rounded-full"
              />
            ))}
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
      <div className="bg-[#F1F2FF] h-[770px] w-[770px] rounded-full blur[132px] absolute top-1/4 right-20 -z-10 blur-[132px]" />
      <div className="bg-[#F1F2FF] h-[770px] w-[770px] rounded-full blur[132px] absolute top-1/2 left-0 -z-10 blur-[132px]" />
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {[
          {
            title: "Your calls are your prompts",
            description:
              "No prompt-writing needed. We train your voice AI directly on your recordings.",
            details: [
              {
                title: "Upload your past calls — no manual prompt setup",
                description: "",
              },
              {
                title: "AI learns tone, flow, & response style automatically",
                description: "",
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
                  className="w-full"
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
                title: "No-code campaign builder",
                description: "",
              },
            ],
            children: (
              <div className="mt-auto">
                <Img
                  src="/images/reliable4.png"
                  alt="reliable3"
                  width={366}
                  height={317}
                  isLocal
                  className="w-full -ml-1"
                />
                <div className="h-2 bg-[#46219c] z-10 -mt-[7.5px] relative" />
              </div>
            ),
          },
          {
            title: "White label Calling Numbers",
            description:
              "Use your brand's own caller ID for every outbound campaign. Increase answer rates and build instant trust.",
            details: [
              {
                title: "Branded Caller ID",
                description: "",
              },
              {
                title: "Regional Routing",
                description: "",
              },
            ],
            children: (
              <Img
                src="/images/reliable5.png"
                alt="reliable3"
                width={366}
                height={333}
                isLocal
                className="w-full object-cover mt-auto"
              />
            ),
          },
        ].map((item, idx) => (
          <div
            className={clsx(
              "gap-y-8 bg-white rounded-[42px] py-6 px-4 shadow-card h-full flex flex-col",
              item.className
            )}
            key={idx}
          >
            <div className="space-y-8">
              <div className="flex gap-x-4 p-2">
                <div
                  className={clsx(
                    "h-11 min-w-11 rounded-full border border-secondary flex items-center justify-center font-medium",
                    idx === 1 && "!text-white"
                  )}
                >
                  05
                </div>
                <div className={clsx("space-y-4")}>
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
              <div
                className={clsx(
                  "flex md:flex-nowrap flex-wrap justify-between px-4",
                  idx === 0 && "gap-x-4"
                )}
              >
                {item.details.map((item, idx1) => (
                  <div className="flex gap-x-3" key={idx1}>
                    <div className="text-deep-violet mt-[6px] h-[14px] min-w-[14px] rounded-full bg-twilight-blue flex items-center justify-center">
                      <Text variant="white" className="-mt-[3px]">
                        •
                      </Text>
                    </div>
                    <div className={"space-y-3"}>
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
            </div>
            {item.children}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReliableAndScalable;
