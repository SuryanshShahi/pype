"use client";
import PageWrapper from "@/app/components/pageWrapper/PageWrapper";
import Divider from "@/app/shared";
import Accordion from "@/app/shared/accordion";
import Button from "@/app/shared/buttons/Button";
import CardWrapper from "@/app/shared/CardWrapper";
import Heading from "@/app/shared/heading";
import ContentHeader from "@/app/shared/heading/ContentHeader";
import Img from "@/app/shared/Img";
import Text from "@/app/shared/Text";
import {
  SvgChat,
  SvgClock,
  SvgGuests,
  SvgLightning,
  SvgUpTime,
  SvgUser,
} from "@/app/svgs";
import clsx from "clsx";
import { BsStars } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";
import { ImQuotesLeft } from "react-icons/im";
import { IoIosCheckmarkCircle, IoIosTrendingUp } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";

const HomePage = () => {
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
    <PageWrapper wrapperClass="max-w-[1290px] mx-auto space-y-16">
      <div className="grid grid-cols-2">
        <div className="space-y-4">
          <div className="flex items-center gap-x-3">
            <div className="bg-white h-10 w-10 rounded-full flex items-center justify-center">
              <BsStars size={20} className="text-brand-tertiary" />
            </div>
            <Text size="lg" variant="deep-violet" type="light">
              The{" "}
              <span className="text-deep-violet font-semibold">
                AI solution
              </span>{" "}
              businesses rely on for excellence.
            </Text>
          </div>
          <Heading
            variant="deep-violet"
            type="medium"
            className="text-[64px] leading-[76px]"
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
              className="bg-btn-primary !rounded-2xl h-[62px] px-6"
              styleBtnName="!font-medium"
            />
            <Button
              btnName="Contact Us"
              onClick={() => {}}
              icon={
                <MdKeyboardArrowRight size={24} className="text-violet-900" />
              }
              variant="secondary"
              className="!rounded-2xl h-[62px] px-6"
              styleBtnName="!text-violet-900 !font-medium"
            />
          </div>
        </div>
        <div className="flex items-center justify-center gap-x-4">
          <Img
            alt="logo"
            src="/images/heroImage.png"
            isLocal
            height={600}
            width={350}
          />
        </div>
      </div>
      <div className="space-y-10">
        <Heading
          variant="deep-violet"
          type="medium"
          className="text-[40px] text-center"
        >
          We are Trusted by Industry Leaders
        </Heading>
        <div className="flex items-center justify-center gap-x-20">
          {[
            "/images/companyLogo/shopify.png",
            "/images/companyLogo/monday.png",
            "/images/companyLogo/microsoft.png",
            "/images/companyLogo/hdfc.png",
          ].map((item, idx) => (
            <Img
              key={idx}
              alt="logo"
              src={item}
              isLocal
              height={56}
              width={192}
            />
          ))}
        </div>
      </div>
      <ContentHeader
        title="Pype AI: Solving Everyday Challenges"
        description="Discover how Pype AI’s voice intelligence revolutionizes tasks. From customer support to personal productivity, see the power of seamless voice solutions."
        sectionTitle="Use Cases"
      />
      {challenges.map((item, idx) => (
        <div className="grid grid-cols-2 gap-x-20" key={idx}>
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
                variant="deep-violet"
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
          <div className={clsx("space-y-6", idx % 2 !== 0 && "order-first")}>
            <Text size="xl" type="medium">
              0{idx + 1}
            </Text>
            <div className="space-y-3">
              <Heading
                variant="deep-violet"
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

      <div className="space-y-12">
        <ContentHeader
          title="Discover Pype AI at Work"
          description="Experience real-time calls with Pype AI’s voice agents, seamlessly handling inquiries, lead qualification, appointment booking, and support resolution."
          sectionTitle="PYPE AI - IN ACTION"
        />
        <div className="grid grid-cols-2 gap-x-10 max-h-[700px]">
          <Img
            src="/images/aiAction/action1.png"
            alt="aiAction"
            isLocal
            height={500}
            width={500}
            className="h-full w-full"
          />
          <div className="flex flex-col justify-between gap-y-10">
            <Img
              src="/images/aiAction/action2.png"
              alt="aiAction"
              isLocal
              height={300}
              width={500}
              className="h-full w-full"
            />
            <Img
              src="/images/aiAction/action3.png"
              alt="aiAction"
              isLocal
              height={300}
              width={500}
              className="h-full w-full"
            />
          </div>
        </div>
      </div>

      <div className="bg-header-gradient rounded-3xl p-10">
        <div className="grid grid-cols-2 items-center gap-x-10">
          <ContentHeader
            title="Integrates with  30+ tools in an instant"
            sectionTitle="Integrations"
            className="!items-start"
          />
          <Text
            size="lg"
            type="light"
            className="text-deep-violet/60 max-w-[800px]"
          >
            Seamlessly connect Pype AI with over 20 tools and apps to streamline
            workflows and enhance customer communication
          </Text>
        </div>
        <Img
          src="/images/integrations.png"
          alt="integrations"
          isLocal
          height={450}
          width={1170}
          className="h-[450px] object-cover"
        />
      </div>

      <div className="bg-btn-primary rounded-[60px] p-16 space-y-6">
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
        <div className="flex items-center justify-between">
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

      <div>
        <ContentHeader
          title="Trusted by industry leaders"
          sectionTitle="Testimonials"
        />
        <div className="grid grid-cols-2 gap-x-10">
          {[
            {
              className: "bg-header-gradient",
              image: "/images/testimonials/testimonial1.png",
              name: "Jane Doe",
              designation: "Sales Head · HDFC",
              rating: 5,
              growth: 5,
              title:
                "The flexibility of their pricing plans allowed us to scale",
              description:
                "Pype AI’s voice agents are a game-changer, handling customer calls with human-like precision. They’ve saved us hours, letting our team focus on sealing deals",
            },
            {
              className: "bg-orange-gradient",
              image: "/images/testimonials/testimonial1.png",
              name: "Jane Doe",
              designation: "Sales Head · HDFC",
              rating: 3,
              growth: 10,
              title:
                "The flexibility of their pricing plans allowed us to scale",
              description:
                "Pype AI’s voice agents are a game-changer, handling customer calls with human-like precision. They’ve saved us hours, letting our team focus on sealing deals",
            },
          ].map((item, idx) => (
            <div
              className={clsx("rounded-[50px] p-5", item.className)}
              key={idx}
            >
              <CardWrapper className="space-y-6 p-8 rounded-[40px]">
                <ImQuotesLeft size={24} className="text-secondary" />
                <Heading
                  variant="deep-violet"
                  type="medium"
                  className="text-[32px] leading-[38px]"
                >
                  {item.title}
                </Heading>
                <Text type="light" size="lg" className="text-deep-violet/70">
                  {item.description}
                </Text>
                <div className="flex items-center justify-between gap-x-4">
                  <div className="flex items-center gap-x-4">
                    <div className="flex justify-center items-center h-[61px] w-[61px] border border-gray-200 rounded-full">
                      <Img
                        src="/images/testimonials/testimonial1.png"
                        alt="testimonial"
                        isLocal
                        height={45}
                        width={45}
                        className="h-[45px] w-[45px] rounded-full"
                      />
                    </div>
                    <div>
                      <Heading type="medium" className="text-xl">
                        {item.name}
                      </Heading>
                      <Text type="light" className="text-deep-violet/70">
                        {item.designation}
                      </Text>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-x-1">
                      {Array(5)
                        .fill(0)
                        .map((_, idx) => (
                          <FaStar
                            size={20}
                            className={clsx(
                              item.rating > idx
                                ? "text-orange-500"
                                : "text-gray-200"
                            )}
                            key={idx}
                          />
                        ))}
                    </div>
                    <Heading
                      variant="deep-violet"
                      className="text-brand-tertiary text-2xl"
                    >
                      {item.rating}.0{" "}
                      <span className="text-gray-300">Ratings</span>
                    </Heading>
                  </div>
                </div>
                <Divider />
                <div className="flex items-center justify-between gap-x-2">
                  <Heading
                    variant="deep-violet"
                    className="text-[56px] leading-8"
                  >
                    {item.growth}x
                  </Heading>
                  <Heading variant="deep-violet" type="light">
                    <IoIosTrendingUp size={42} className="ml-auto" />
                    Business Growth
                  </Heading>
                </div>
              </CardWrapper>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-header-gradient rounded-3xl p-10">
        <div className="grid grid-cols-2 items-center gap-x-10">
          <ContentHeader
            title="Frequently Asked Question"
            sectionTitle="Quick Answers"
            className="!items-start"
          />
          <div className="space-y-10">
            <Text
              size="lg"
              type="light"
              className="text-deep-violet/60 max-w-[800px]"
            >
              Got questions? Find answers about Pype AI’s voice agents,
              features, and how we transform customer communication.
            </Text>
            <Button
              btnName="Contact Us"
              onClick={() => {}}
              icon={<MdKeyboardArrowRight size={24} className="text-white" />}
              className="bg-btn-primary !rounded-2xl !h-[62px] px-6"
              styleBtnName="!font-medium"
            />
          </div>
        </div>
        <Accordion
          data={[
            {
              title: "What is Pype AI for customer service?",
              body: "What is Pype AI for customer service?",
              isOpen: true,
            },
          ]}
        />
      </div>
    </PageWrapper>
  );
};

export default HomePage;
