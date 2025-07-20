import Divider from "@/app/shared";
import Heading from "@/app/shared/heading";
import ContentHeader from "@/app/shared/heading/ContentHeader";
import Text from "@/app/shared/Text";
import { SvgChat, SvgClock, SvgGuests, SvgUpTime, SvgWave } from "@/app/svgs";
import { forwardRef } from "react";
import CountUp from "react-countup";

const InteractionsAndGrowing = forwardRef<HTMLDivElement, { visible: boolean }>(
  ({ visible }, ref) => {
    return (
      <div
        ref={ref}
        className="bg-btn-primary md:rounded-[60px] rounded-[32px] md:p-16 p-10 space-y-6 mx-5 !relative"
      >
        <SvgWave
          className="absolute top-5 -right-[14%] animate-pulse rotate-6"
          height={190}
        />
        <div className="">
          <ContentHeader
            title="Numbers Behind the Voices:"
            sectionTitle="Pype AI By the Numbers"
            className="md:!items-start"
            styleTitle="md:!text-start !text-white !text-[40px] leading-[48px]"
          />
          <Text
            type="light"
            className="!text-white md:text-[40px] text-[32px] md:leading-[50px] sm:text-start text-center"
          >
            Powering 1 million+ interactions and growing.
          </Text>
        </div>
        <Divider className="!border-white/40" />
        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-10">
          {[
            {
              title: "15,000+",
              subtitle: "Active Users",
              icon: <SvgGuests />,
              count: 15000,
            },
            {
              title: "1M+",
              subtitle: "Interactions",
              icon: <SvgChat />,
              count: 1,
            },
            {
              title: "4M+",
              subtitle: "Hours Saved",
              icon: <SvgClock />,
              count: 4,
            },
            {
              title: "99.9%",
              subtitle: "Uptime",
              icon: <SvgUpTime />,
              count: 99.9,
            },
          ].map((item, idx) => (
            <div key={idx} className="space-y-8">
              {item.icon}
              <div className="space-y-4">
                <Heading
                  variant="white"
                  type="medium"
                  className="text-[40px] leading-10"
                >
                  <CountUp
                    end={item.count}
                    suffix={idx === 3 ? "%" : "+"}
                    duration={0.7}
                    redraw={visible}
                  />
                </Heading>
                <Text type="light" size="xl" className="!text-white/70">
                  {item.subtitle}
                </Text>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
);
InteractionsAndGrowing.displayName = "InteractionsAndGrowing";
export default InteractionsAndGrowing;
