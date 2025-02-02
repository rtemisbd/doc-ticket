"use client";

import { Accordion, AccordionItem } from "@nextui-org/react";

export default function Accordiann() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <Accordion
      defaultExpandedKeys={["1"]}
      className="p-0 m-0 w-full" // Remove padding and ensure full width
      motionProps={{
        variants: {
          enter: {
            y: 0,
            opacity: 1,
            height: "auto",
            overflowY: "unset",
            transition: {
              height: {
                type: "spring",
                stiffness: 500,
                damping: 30,
                duration: 1,
              },
              opacity: {
                easings: "ease",
                duration: 1,
              },
            },
          },
          exit: {
            y: -10,
            opacity: 0,
            height: 0,
            overflowY: "hidden",
            transition: {
              height: {
                easings: "ease",
                duration: 0.25,
              },
              opacity: {
                easings: "ease",
                duration: 0.3,
              },
            },
          },
        },
      }}
    >
      {[
        { key: "1", title: "Why you buy this package?" },
        { key: "2", title: "How to use Voucher?" },
        { key: "3", title: "Google Map" },
        { key: "4", title: "Feedback" },
      ].map((item) => (
        <AccordionItem
          key={item.key}
          aria-label={`Accordion ${item.key}`}
          title={
            <span className="bg-gray-300 text-black p-3 rounded-md block">
              {item.title}
            </span>
          }
        >
          <div className="bg-white pr-6 rounded-md">{defaultContent}</div>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
