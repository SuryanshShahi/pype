import { redirect } from "next/navigation";
import HomePage from "./(pages)/home/page";
import PageWrapper from "./components/pageWrapper/PageWrapper";

export default function Home() {
  redirect("/home");
  return;
}
