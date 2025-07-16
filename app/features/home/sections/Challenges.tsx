import CardWrapper from "@/app/shared/CardWrapper";
import Heading from "@/app/shared/heading";
import ContentHeader from "@/app/shared/heading/ContentHeader";
import Img from "@/app/shared/Img";
import Text from "@/app/shared/Text";
import { SvgLightning, SvgUser } from "@/app/svgs";
import clsx from "clsx";
import { IoIosCheckmarkCircle } from "react-icons/io";

const Challenges = () => {
  const challenges = [
    {
      image: "/images/challenges/challenge1.png",
      value: "67%",
      imageTitle: "Higher Engagement with voice follow-up",
      title: "Social Media Lead Generation",
      description:
        "Pype AI’s instant voice follow-ups turn social media ad leads into conversions with unmatched speed",
      details: [
        {
          label:
            "Convert Facebook & Instagram Ad Leads instantly with AI voice follow up",
          icon: <SvgLightning height={28} width={28} />,
        },
        {
          label:
            "67% higher conversion when first reach out is less than 5 minutes",
          icon: <SvgUser />,
        },
      ],
    },
    {
      image: "/images/challenges/challenge2.png",
      value: "85%",
      imageTitle: "Higher lead recovery rate with instant callbacks",
      title: "Missed Call Recovery",
      description:
        "Pype AI ensures no lead slips through the cracks with instant AI-driven callbacks",
      details: [
        {
          label:
            "Instant AI Callbacks respond within 30 seconds of missed call",
          icon: <SvgLightning height={28} width={28} />,
        },
        {
          label: "Never lose another Le with 24/7 Automated response",
          icon: <SvgUser />,
        },
      ],
    },
    {
      image: "/images/challenges/challenge3.png",
      value: "85%",
      imageTitle: "Higher lead recovery rate with instant callbacks",
      title: "Lead Qualification & Nurturing",
      description:
        "Pype AI ensures no lead slips through the cracks with instant AI-driven callbacks",
      details: [
        {
          label:
            "AI Automatically qualifies incoming leads & routes to the right team member",
          icon: <IoIosCheckmarkCircle size={28} className="text-violet-700" />,
        },
        {
          label:
            "Maximize team efficiency by matching lead quality with agent experience",
          icon: <IoIosCheckmarkCircle size={28} className="text-violet-700" />,
        },
        {
          label:
            "Perfect handoff with complete context & qualification details",
          icon: <IoIosCheckmarkCircle size={28} className="text-violet-700" />,
        },
      ],
    },
    {
      image: "/images/challenges/challenge3.png",
      value: "85%",
      imageTitle: "Higher lead recovery rate with instant callbacks",
      title: "Regional Language Suppport",
      description:
        "Pype AI ensures no lead slips through the cracks with instant AI-driven callbacks",
      details: [
        {
          label:
            "Native Language  voice AI enhances customer trust and improves engagement in Tier 2 & Tier 3 cities",
          icon: <IoIosCheckmarkCircle size={28} className="text-violet-700" />,
        },
        {
          label:
            "Perfect accent and cultural understanding builds stronger connections with potential buyers",
          icon: <IoIosCheckmarkCircle size={28} className="text-violet-700" />,
        },
      ],
    },
  ];
  return (
    <div className="space-y-20 mx-5">
      <ContentHeader
        title="Pype AI: Solving Everyday Challenges"
        description="Discover how Pype AI’s voice intelligence revolutionizes tasks. From customer support to personal productivity, see the power of seamless voice solutions."
        sectionTitle="Use Cases"
      />
      {challenges.map((item, idx) => (
        <div
          className="grid md:grid-cols-2 grid-cols-1 md:gap-x-20 gap-10"
          key={idx}
        >
          <div
            className={clsx(
              "p-8 rounded-[32px]",
              idx % 2 === 0 ? "bg-btn-primary" : "bg-violet-50"
            )}
          >
            <CardWrapper className="rounded-3xl space-y-8 p-8">
              <Img
                alt="logo"
                src={item.image}
                isLocal
                height={300}
                width={500}
                className="h-full w-full"
              />
              <Heading
                type="medium"
                className="rounded-2xl text-center px-6 py-4 bg-gray-50 border border-gray-100"
              >
                <span className="text-brand-tertiary font-semibold">
                  {item.value}
                </span>{" "}
                {item.imageTitle}
              </Heading>
            </CardWrapper>
          </div>
          <div className={clsx("space-y-6", idx % 2 !== 0 && "md:order-first")}>
            <Text size="xl" type="medium">
              0{idx + 1}
            </Text>
            <div className="space-y-3">
              <Heading
                type="medium"
                className="text-[40px] max-w-[360px] leading-12"
              >
                {item.title}
              </Heading>
              <Text type="medium" variant="secondary">
                {item.description}
              </Text>
            </div>
            {item.details.map((detail, idx1) => (
              <Text variant="secondary" className="flex gap-x-2" key={idx1}>
                {detail.icon}
                {detail.label}
              </Text>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Challenges;
