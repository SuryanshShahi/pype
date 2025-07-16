import Divider from "@/app/shared";
import Button from "@/app/shared/buttons/Button";
import Heading from "@/app/shared/heading";
import Img from "@/app/shared/Img";
import ListItem from "@/app/shared/ListItem";
import Text from "@/app/shared/Text";
import Link from "next/link";
import router from "next/router";
import { Fragment } from "react";

const Footer = () => {
  const routes = {
    main_pages: [
      { name: "Home page", path: "/products", key: "products" },
      { name: "About", path: "/about", key: "about" },
      { name: "Our Team", path: "/about", key: "about" },
      { name: "Contact", path: "/about", key: "about" },
    ],
    product: [
      { name: "Features", path: "/products", key: "products" },
      { name: "Pricing", path: "/about", key: "about" },
      { name: "Case Studies", path: "/about", key: "about" },
      { name: "Testimonials", path: "/about", key: "about" },
    ],
    social: [
      { name: "LinkedIn", path: "/products", key: "products" },
      { name: "Youtube", path: "/about", key: "about" },
      { name: "Facebook", path: "/about", key: "about" },
      { name: "Instagram", path: "/about", key: "about" },
    ],
  };
  const socialLinks = [
    "Legal Notice",
    "Terms Corporate",
    "Privacy",
    "I'm a candidate",
  ];
  return (
    <div className="bg-header-gradient py-16 px-5 md:px-20 gap-20 mt-16">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
        <div className="space-y-3">
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
            <Heading
              as="h1"
              type="black"
              variant="primary"
              className="text-[32px]"
            >
              Pype
            </Heading>
          </div>
          <div className="space-y-10 mt-auto">
            <Text size="lg" type="light" className="max-w-[450px]">
              Pype AI delivers enterprise-grade AI voice agents for seamless
              customer interactions. Automate calls, boost efficiency, and
              elevate experiences with human-like conversations.
            </Text>
            <div className="space-y-4">
              <div className="relative w-[70%] shadow-card rounded-full">
                <input
                  placeholder="Enter your email"
                  className="bg-white rounded-full px-6 py-4 w-full outline-none pr-32"
                />
                <Button
                  btnName="Subscribe"
                  className="!rounded-full bg-btn-primary !px-6 !py-4 !absolute right-0 top-0"
                />
              </div>
              <Text size="xs" type="light">
                By subscribe to you agree with ur{" "}
                <Link href="/privacy" className="text-deep-violet text-xs">
                  Privacy policy
                </Link>
              </Text>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-x-8">
          {Object.keys(routes).map((key, idx) => (
            <ul className="space-y-6" key={idx}>
              <Heading type="medium" className="text-deep-violet capitalize">
                {key.replace("_", " ")}
              </Heading>
              {routes[key as keyof typeof routes].map((item, idx) => (
                <ListItem
                  key={idx}
                  name={item?.name}
                  activeColor="text-deep-violet font-medium"
                  onClick={() => router.push(item.path)}
                />
              ))}
            </ul>
          ))}
        </div>
      </div>
      <Divider className="my-12" variant="deep-violet" />
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <Text type="light">© 2025 - Pype . All rights reserved.</Text>
        <div className="flex md:gap-4 gap-2 flex-wrap justify-center">
          {socialLinks.map((item, idx) => (
            <Fragment key={idx}>
              <ListItem
                key={item}
                name={item}
                activeColor="text-twilight-blue font-medium"
              />
              {idx !== socialLinks.length - 1 && <div>•</div>}
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
