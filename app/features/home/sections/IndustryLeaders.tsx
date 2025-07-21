import Heading from "@/app/shared/heading";
import Img from "@/app/shared/Img";
import React from "react";

const IndustryLeaders = () => {
  const logos = [
    "/images/companyLogo/upwork.png",
    "/images/companyLogo/shopify.png",
    "/images/companyLogo/monday.png",
    "/images/companyLogo/microsoft.png",
    "/images/companyLogo/hdfc.png",
    "/images/companyLogo/pb.png",
  ];

  return (
    <div className="space-y-10 overflow-hidden w-screen absolute left-0">
      <Heading type="medium" className="text-[40px] text-center">
        We are Trusted by Industry Leaders
      </Heading>

      <div className="relative overflow-hidden">
        <div className="flex gap-x-10 items-center animate-scroll">
          {/* First set of logos */}
          {logos.map((item, idx) => (
            <div key={`first-${idx}`} className="flex-shrink-0 mx-8">
              <Img alt="logo" src={item} isLocal height={56} width={192} />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {logos.map((item, idx) => (
            <div key={`second-${idx}`} className="flex-shrink-0 mx-8">
              <Img alt="logo" src={item} isLocal height={56} width={192} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndustryLeaders;
