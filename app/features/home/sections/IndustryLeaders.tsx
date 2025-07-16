import Heading from "@/app/shared/heading";
import Img from "@/app/shared/Img";
import React from "react";

const IndustryLeaders = () => {
  return (
    <div className="space-y-10 overflow-hidden">
      <Heading type="medium" className="text-[40px] text-center">
        We are Trusted by Industry Leaders
      </Heading>
      <div className="flex items-center justify-center gap-x-20">
        <Img
          alt="logo"
          src="/images/companyList.png"
          isLocal
          height={56}
          width={1440}
          className="w-screen"
        />

        {/* {[
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
        ))} */}
      </div>
    </div>
  );
};

export default IndustryLeaders;
