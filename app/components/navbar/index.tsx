import Button from "@/app/shared/buttons/Button";
import Heading from "@/app/shared/heading";
import Img from "@/app/shared/Img";
import ListItem from "@/app/shared/ListItem";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const router = useRouter();

  useEffect(() => {
    const slideNav = () => {
      const navbar = document.getElementById("navbar");
      if (navbar) {
        if (window.scrollY >= 100) {
          navbar.classList.add("active");
        } else {
          navbar.classList.remove("active");
        }
      }
    };
    window.addEventListener("scroll", slideNav);
    return () => window.removeEventListener("scroll", slideNav);
  }, []);

  const pathname = usePathname();
  const [isActive, setIsActive] = useState("");
  const routes = [
    { name: "Home", path: "/", key: "home" },
    { name: "Inner pages", path: "/products", key: "products" },
    { name: "Features", path: "/about", key: "about" },
    { name: "Pricing", path: "/about", key: "about" },
    { name: "Contact us", path: "/about", key: "about" },
  ];

  return (
    <>
      <div className="bg-header-gradient h-screen absolute inset-0 -z-10" />
      <div className="sticky z-20 p-5 top-0" id="navbar">
        <div className="flex items-center relative z-10 justify-between bg-white p-4 rounded-3xl container sm:px-5 mx-auto shadow-card">
          <div className="flex items-center gap-x-2">
            <Img
              alt="logo"
              src="/images/logo.png"
              isLocal
              height={36}
              width={22}
              role="button"
              onClick={() => router.push("/")}
            />
            <Heading className="text-[32px]">Pype</Heading>
          </div>
          <div className="flex gap-x-8 items-center">
            <ul className="lg:flex hidden w-fit gap-x-8">
              {routes.map((item, idx) => (
                <ListItem
                  key={idx}
                  name={item?.name}
                  isSelected={pathname
                    ?.toLowerCase()
                    .includes(item?.key?.toLowerCase())}
                  activeColor="text-violet-900 font-medium"
                  onClick={() => router.push(item.path)}
                />
              ))}
            </ul>
            <div className="flex items-center gap-x-3">
              <Button
                btnName="Get Started Free"
                onClick={() => {}}
                className="bg-btn-primary !rounded-2xl sm:block hidden !px-6 !py-[14px]"
              />
              <Button
                btnName="Sign In"
                onClick={() => {}}
                variant="secondary"
                className="!bg-violet-50 !rounded-2xl !border-violet-200 sm:block hidden !px-6 !py-[14px]"
                styleBtnName="!text-violet-900"
              />

              <GiHamburgerMenu
                className="md:hidden"
                size={24}
                onClick={() =>
                  setIsActive(isActive === "SIDEBAR" ? "" : "SIDEBAR")
                }
              />
            </div>
          </div>
        </div>
      </div>
      {isActive === "SIDEBAR" && (
        <div
          className="bg-white h-screen w-screen z-50 space-y-6 py-2 px-4 fixed top-0 animate-slideLeft"
          // id="sideBar"
        >
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-x-2">
              <Img
                alt="logo"
                src="/images/logo.png"
                isLocal
                height={36}
                width={22}
                role="button"
                onClick={() => router.push("/")}
              />
              <Heading className="text-[32px]">Pype</Heading>
            </div>
            <div
              className="cursor-pointer text-4xl p-3"
              onClick={() => setIsActive("")}
            >
              &times;
            </div>
          </div>
          <div className={`space-y-5 mr-5`}>
            {routes?.map((item, idx) => (
              <ListItem
                key={idx}
                name={item?.name}
                isSelected={pathname
                  ?.toLowerCase()
                  .includes(item?.key?.toLowerCase())}
                activeColor="text-deep-violet font-medium"
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
