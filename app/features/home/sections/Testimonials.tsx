import Divider from "@/app/shared";
import CardWrapper from "@/app/shared/CardWrapper";
import Heading from "@/app/shared/heading";
import ContentHeader from "@/app/shared/heading/ContentHeader";
import Img from "@/app/shared/Img";
import Text from "@/app/shared/Text";
import clsx from "clsx";
import { FaStar } from "react-icons/fa";
import { ImQuotesLeft } from "react-icons/im";
import { IoIosTrendingUp } from "react-icons/io";

const Testimonials = () => {
  return (
    <div className="mx-5 space-y-10">
      <ContentHeader
        title="Trusted by"
        description="Industry leaders"
        sectionTitle="Testimonials"
        styleDescription="md:!text-[56px] !text-[40px] md:!leading-[67px] !leading-[50px] !text-center !text-deep-violet !font-medium !-mt-6"
      />
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
        {[
          {
            className: "bg-header-gradient",
            image: "/images/avatar1.png",
            name: "Jane Doe",
            designation: "Sales Head · HDFC",
            rating: 5,
            growth: 5,
            title: "The flexibility of their pricing plans allowed us to scale",
            description:
              "Pype AI’s voice agents are a game-changer, handling customer calls with human-like precision. They’ve saved us hours, letting our team focus on sealing deals",
          },
          {
            className: "bg-orange-gradient",
            image: "/images/avatar1.png",
            name: "Jane Doe",
            designation: "Sales Head · HDFC",
            rating: 3,
            growth: 10,
            title: "The flexibility of their pricing plans allowed us to scale",
            description:
              "Pype AI’s voice agents are a game-changer, handling customer calls with human-like precision. They’ve saved us hours, letting our team focus on sealing deals",
          },
        ].map((item, idx) => (
          <div className={clsx("rounded-[50px] p-5", item.className)} key={idx}>
            <CardWrapper className="space-y-6 p-8 rounded-[40px]">
              <ImQuotesLeft size={24} className="text-secondary" />
              <Heading type="medium" className="text-[32px] leading-[38px]">
                {item.title}
              </Heading>
              <Text type="light" size="lg">
                {item.description}
              </Text>
              <div className="flex items-center justify-between gap-x-4">
                <div className="flex items-center gap-x-4">
                  <div className="flex justify-center items-center h-[61px] w-[61px] border border-gray-200 rounded-full">
                    <Img
                      src={item.image}
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
                    <Text type="light">{item.designation}</Text>
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
                              ? "text-brand-500"
                              : "text-gray-200"
                          )}
                          key={idx}
                        />
                      ))}
                  </div>
                  <Heading className="text-brand-tertiary text-2xl">
                    {item.rating}.0{" "}
                    <span className="text-gray-300">Ratings</span>
                  </Heading>
                </div>
              </div>
              <Divider />
              <div className="flex items-center justify-between gap-x-2">
                <Heading className="text-[56px] leading-8">
                  {item.growth}
                  <span className="text-[40px]">x</span>
                </Heading>
                <Heading type="light">
                  <IoIosTrendingUp size={42} className="ml-auto" />
                  Business Growth
                </Heading>
              </div>
            </CardWrapper>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
