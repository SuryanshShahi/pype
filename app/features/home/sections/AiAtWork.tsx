import ContentHeader from "@/app/shared/heading/ContentHeader";
import Img from "@/app/shared/Img";
import React from "react";

const AiAtWork = () => {
  return (
    <div className="space-y-12 mx-5">
      <ContentHeader
        title="Discover Pype AI at Work"
        description="Experience real-time calls with Pype AI’s voice agents, seamlessly handling inquiries, lead qualification, appointment booking, and support resolution."
        sectionTitle="PYPE AI - IN ACTION"
      />
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-10">
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
  );
};

export default AiAtWork;
