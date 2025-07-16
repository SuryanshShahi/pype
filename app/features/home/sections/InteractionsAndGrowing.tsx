import Divider from "@/app/shared";
import Heading from "@/app/shared/heading";
import ContentHeader from "@/app/shared/heading/ContentHeader";
import Text from "@/app/shared/Text";
import { SvgChat, SvgClock, SvgGuests, SvgUpTime } from "@/app/svgs";

const InteractionsAndGrowing = () => {
  return (
    <div className="bg-btn-primary rounded-[60px] p-16 space-y-6 mx-5">
      <div className="">
        <ContentHeader
          title="Numbers Behind the Voices:"
          sectionTitle="Pype AI By the Numbers"
          className="!items-start"
          styleTitle="!text-white leading-12"
        />
        <Text type="light" className="!text-white text-[40px] -mt-8">
          Powering 1 million+ interactions and growing.
        </Text>
      </div>
      <Divider className="!border-white/40" />
      <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-10">
        {[
          { title: "15,000+", subtitle: "Active Users", icon: <SvgGuests /> },
          { title: "1M+", subtitle: "Interactions", icon: <SvgChat /> },
          { title: "4M+", subtitle: "Hours Saved", icon: <SvgClock /> },
          { title: "99.9%", subtitle: "Uptime", icon: <SvgUpTime /> },
        ].map((item, idx) => (
          <div key={idx} className="space-y-8">
            {item.icon}
            <div className="space-y-4">
              <Heading
                variant="white"
                type="medium"
                className="text-[40px] leading-10"
              >
                {item.title}
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
};

export default InteractionsAndGrowing;
