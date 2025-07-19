"use client";
import clsx from "clsx";
import { Fragment, useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import Divider from "..";
import Heading from "../heading";
import Text from "../Text";

interface IAccordion {
  data: {
    title: string;
    body: React.ReactNode;
    isOpen?: boolean;
    isRichText?: boolean;
  }[];
  wrapperClass?: string;
  styleTitle?: string;
}

const Accordion = ({ data, wrapperClass, styleTitle }: IAccordion) => {
  const [activeIndex, setActiveIndex] = useState(
    data
      ?.map((item, idx) => (item?.isOpen ? idx : null))
      .filter((r) => r !== null) as number[]
  );

  const toggleAccordion = (index: number) => {
    setActiveIndex((prevActiveIndex) =>
      prevActiveIndex.includes(index)
        ? prevActiveIndex.filter((i) => i !== index)
        : [...prevActiveIndex, index]
    );
  };

  return data?.map((acc, index) => (
    <Fragment key={index}>
      <AccordionItem
        key={index}
        title={acc.title}
        body={acc.body}
        isRichText={acc.isRichText}
        isActive={activeIndex.includes(index)}
        toggleAccordion={() => toggleAccordion(index)}
        styleTitle={styleTitle}
        className={wrapperClass}
      />
      {/* {index !== data?.length - 1 && <Divider variant="secondary" />} */}
    </Fragment>
  ));
};

export default Accordion;

interface IAccordionItem {
  title: string;
  body: React.ReactNode;
  isRichText?: boolean;
  isActive: boolean;
  toggleAccordion: () => void;
  styleTitle?: string;
  className?: string;
}

const AccordionItem = ({
  title,
  body,
  isRichText,
  isActive,
  toggleAccordion,
  styleTitle,
  className,
}: IAccordionItem) => {
  return (
    <div className={clsx("space-y-4", className)}>
      <div
        className={clsx(
          "flex cursor-pointer items-center justify-between prevent-select"
        )}
        role="button"
        onClick={toggleAccordion}
        onKeyDown={() => {}}
      >
        <Heading className={clsx("text-xl", styleTitle)}>{title}</Heading>
        <div className="bg-white rounded-full h-[42px] w-[42px] flex items-center justify-center">
          {isActive ? (
            <FiMinus size={24} className="text-primary duration-300" />
          ) : (
            <FiPlus size={24} className="text-primary duration-300" />
          )}
        </div>
      </div>

      {isActive && (
        <div className="overflow-hidden">
          {isRichText ? (
            <p
              className="animate-slideLeft rce-text"
              dangerouslySetInnerHTML={{ __html: body as string }}
            />
          ) : typeof body === "string" ? (
            <Text variant="secondary" className="animate-slideLeft">
              {body}
            </Text>
          ) : (
            body
          )}
        </div>
      )}
    </div>
  );
};
