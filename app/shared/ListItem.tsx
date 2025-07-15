import clsx from "clsx";
import { ImRadioChecked2 } from "react-icons/im";

const ListItem = ({
  onClick,
  name,
  isSelected,
  activeColor,
  withCheck,
}: {
  onClick?: () => void;
  name: string;
  isSelected?: boolean;
  withCheck?: boolean;
  activeColor?: string;
}) => {
  return (
    <li className="group list-none cursor-pointer" onClick={onClick}>
      <div className="flex items-center gap-4">
        {withCheck &&
          (isSelected ? (
            <ImRadioChecked2 size={17.5} color="#763235" className="-mr[1px]" />
          ) : (
            <div className="h-[17px] w-[17px] rounded-full border border-gray-400" />
          ))}

        <div>
          <span
            className={clsx(
              isSelected && `text-[#763235] fon-medium ${activeColor}`
            )}
          >
            {name}
          </span>
          <div
            className={clsx(
              "h-[1px] bg-black duration-500 w-0 group-hover:w-[70%]",
              isSelected && `!bg-[#763235] ${activeColor}`
            )}
          />
        </div>
      </div>
    </li>
  );
};

export default ListItem;
