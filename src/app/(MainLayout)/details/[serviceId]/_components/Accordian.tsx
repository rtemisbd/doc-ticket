"use client";

import { Accordion, AccordionItem } from "@nextui-org/react";

export default function App() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <Accordion
      defaultExpandedKeys={["1"]}
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
      <AccordionItem
        key="1"
        aria-label="Accordion 1"
        title={
          <span className="bg-gray-300 text-black p-3 rounded-md block">
            Why you buy this package?
          </span>
        }
      >
        <div className="bg-white  pr-6  rounded-md">{defaultContent}</div>
      </AccordionItem>

      <AccordionItem
        key="2"
        aria-label="Accordion 1"
        title={
          <span className="bg-gray-300 text-black p-3 rounded-md block">
            How to use Voucher?
          </span>
        }
      >
        <div className="bg-white pr-6   rounded-md">{defaultContent}</div>
      </AccordionItem>

      <AccordionItem
        key="3"
        aria-label="Accordion 1"
        title={
          <span className="bg-gray-300 text-black p-3 rounded-md block">
            Google Map
          </span>
        }
      >
        <div className="bg-white pr-6   rounded-md">{defaultContent}</div>
      </AccordionItem>
      <AccordionItem
        key="4"
        aria-label="Accordion 1"
        title={
          <span className="bg-gray-300 text-black p-3 rounded-md block">
            Feedback
          </span>
        }
      >
        <div className="bg-white pr-6  rounded-md">{defaultContent}</div>
      </AccordionItem>
    </Accordion>
  );
}
