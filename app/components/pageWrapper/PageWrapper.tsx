"use client";
import Loader from "@/app/shared/Loader";
import { FC, Fragment, PropsWithChildren, Suspense, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../footer";
import Navbar from "../navbar";

interface IPageWraps {
  wrapperClass?: string;
  isNavbar?: boolean;
  navClass?: string;
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    meta?: { name: string; property: string; content: string; id: string }[];
  };
}

const PageWrapper: FC<PropsWithChildren<IPageWraps>> = ({
  children,
  wrapperClass,
}) => {
  const [isActive, setIsActive] = useState(false);
  const slideNav = () => {
    if (window.scrollY >= 100) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", slideNav);
  }

  return (
    <Suspense fallback={<Loader />}>
      <Fragment>
        <ToastContainer stacked />
        <div className="animate-bottom">
          <Navbar />
          <div className={wrapperClass}>{children}</div>
          {isActive && (
            <div
              className="z-10 w-12 h-8 hover:h-10 duration-300 bottom-0 right-10 rounded-t-md fixed cursor-pointer bg-deep-violet flex items-center justify-center"
              onClick={() => window.scroll(0, 0)}
            >
              <IoIosArrowUp color="white" />
            </div>
          )}
          <Footer />
        </div>
      </Fragment>
    </Suspense>
  );
};

export default PageWrapper;
