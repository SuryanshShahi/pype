import Accordion from "@/app/shared/accordion";
import Button from "@/app/shared/buttons/Button";
import ContentHeader from "@/app/shared/heading/ContentHeader";
import Text from "@/app/shared/Text";
import { MdKeyboardArrowRight } from "react-icons/md";

const Faqs = () => {
  return (
    <div className="bg-header-gradient rounded-3xl p-10 space-y-14 mx-5">
      <div className="grid md:grid-cols-2 grid-cols-1 items-center md:gap-10">
        <ContentHeader
          title="Frequently Asked Question"
          sectionTitle="Quick Answers"
          className="!items-start"
        />
        <div className="space-y-10">
          <Text size="lg" type="light" className="max-w-[800px]">
            Got questions? Find answers about Pype AI’s voice agents, features,
            and how we transform customer communication.
          </Text>
          <Button
            btnName="Contact Us"
            onClick={() => {}}
            icon={<MdKeyboardArrowRight size={24} className="text-white" />}
            className="bg-btn-primary !rounded-2xl !py-4 !px-6"
            styleBtnName="!font-medium"
          />
        </div>
      </div>
      <div className="space-y-3">
        <Accordion
          data={[
            {
              title: "What is Pype AI for customer service?",
              body: "Pype Ai  agents perceive customer intent, take the right action, and adapt over time through real-time interactions. They instantly resolve common issues and escalate complex ones to human agents with full context, boosting resolution rates while enhancing the customer experience.",
              isOpen: true,
            },
            {
              title: "What is Pype AI for customer service?",
              body: "Pype Ai  agents perceive customer intent, take the right action, and adapt over time through real-time interactions. They instantly resolve common issues and escalate complex ones to human agents with full context, boosting resolution rates while enhancing the customer experience.",
              isOpen: true,
            },
            {
              title: "What is Pype AI for customer service?",
              body: "Pype Ai  agents perceive customer intent, take the right action, and adapt over time through real-time interactions. They instantly resolve common issues and escalate complex ones to human agents with full context, boosting resolution rates while enhancing the customer experience.",
              isOpen: true,
            },
            {
              title: "What is Pype AI for customer service?",
              body: "Pype Ai  agents perceive customer intent, take the right action, and adapt over time through real-time interactions. They instantly resolve common issues and escalate complex ones to human agents with full context, boosting resolution rates while enhancing the customer experience.",
              isOpen: true,
            },
          ]}
          wrapperClass="bg-white rounded-[32px] p-6"
        />
      </div>
    </div>
  );
};

export default Faqs;
