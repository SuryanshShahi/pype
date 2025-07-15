import React from "react";
import Chip from "../Chip";
import Heading from ".";
import Text from "../Text";
import clsx from "clsx";

const ContentHeader = ({
  title,
  description,
  sectionTitle,
  className,
  styleTitle,
}: {
  title: string;
  description?: string;
  sectionTitle: string;
  className?: string;
  styleTitle?: string;
}) => {
  return (
    <div className={clsx("flex flex-col items-center gap-y-6", className)}>
      <Chip>{sectionTitle}</Chip>
      <Heading
        variant="deep-violet"
        type="medium"
        className={clsx("text-[56px] leading-[67px]", styleTitle)}
      >
        {title}
      </Heading>
      <Text
        size="lg"
        type="light"
        className="text-deep-violet/60 max-w-[800px] text-center"
      >
        {description}
      </Text>
    </div>
  );
};

export default ContentHeader;
