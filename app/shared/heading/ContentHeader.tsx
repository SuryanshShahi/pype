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
  styleDescription,
}: {
  title: string;
  description?: string;
  sectionTitle: string;
  className?: string;
  styleTitle?: string;
  styleDescription?: string;
}) => {
  return (
    <div className={clsx("flex flex-col items-center gap-y-6", className)}>
      <Chip>{sectionTitle}</Chip>
      <Heading
        type="medium"
        className={clsx(
          "md:text-[56px] text-[40px] md:leading-[67px] leading-[50px] text-center",
          styleTitle
        )}
      >
        {title}
      </Heading>
      {description && (
        <Text
          size="lg"
          type="light"
          className={clsx("max-w-[800px] text-center", styleDescription)}
        >
          {description}
        </Text>
      )}
    </div>
  );
};

export default ContentHeader;
