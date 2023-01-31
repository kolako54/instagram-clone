import { footerList1, footerList2, footerList3 } from "@/utils/constants";
import React from "react";

const Footbar = ({ items, mt }: { items: string[]; mt: boolean }) => (
  <div className={`flex flex-wrap text-gray-500 gap-2 ${mt && "mt-5"}`}>
    {items.map((item) => (
      <a className="cursor-pointer hover:underline">{item}</a>
    ))}
  </div>
);
const Footer = (props: {}) => {
  return (
    <>
      <div className="border-[1px] border-gray-200 my-5"></div>
      <Footbar items={footerList1} mt={false} />
      <Footbar items={footerList2} mt />
      <Footbar items={footerList3} mt />
    </>
  );
};
export default Footer;
