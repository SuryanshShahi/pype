import ContentHeader from "@/app/shared/heading/ContentHeader";
import Img from "@/app/shared/Img";
import Text from "@/app/shared/Text";
import React from "react";

const Integrations = () => {
  return (
    <div className="bg-header-gradient rounded-3xl p-10 mx-5">
      <div className="grid md:grid-cols-2 grid-cols-1 items-center md:gap-10">
        <ContentHeader
          title="Integrates with  30+ tools in an instant"
          sectionTitle="Integrations"
          className="!items-start"
        />
        <Text size="lg" type="light" className="max-w-[800px]">
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
  );
};

export default Integrations;
