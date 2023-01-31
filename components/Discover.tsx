import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { topics } from "../utils/constants";

const Discover = () => {
  const router = useRouter();
  const { topic } = router.query;
  const highlightedstyle = "sm:border-2 border-red-600 text-red-500";
  const defaultstyle = "sm:border-gray-600 sm:border-[2px]";
  return (
    <>
      <hr className="my-5" />
      <p className="mt-2 hidden sm:block">Popular Topics</p>
      <div className="flex flex-wrap w-8 sm:w-auto items-center">
        {topics.map((item) => {
          return (
            <Link href={`/?topic=${item.name}`} key={item.name}>
              <div
                className={`hover:bg-gray-200 flex sm:flex-row flex-col items-center m-1 p-2 sm:rounded-full ${
                  item.name === topic ? highlightedstyle : defaultstyle
                }`}
              >
                <span>{item.icon}</span>
                <p className="hidden sm:block mx-1">{item.name}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};
export default Discover;
