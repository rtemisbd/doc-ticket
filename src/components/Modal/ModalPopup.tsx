/* eslint-disable react/jsx-sort-props */
"use client";

import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import React from "react";
import { FaRegCircle } from "react-icons/fa";

export default function ModalPopup() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = React.useState("md");

  const handleOpen = (size: any) => {
    setSize(size);
    onOpen();
  };

  const termsData = [
    {
      id: 1,
      text: "রেন্ট সময়কাল শুরু হবে যেদিন আইটেম টি সংগ্রহ সরবরাহ হবে এবং চুক্তিতে উল্লেখিত ফেরত দেয়ার তারিখে শেষ হবে।",
    },
    {
      id: 2,
      text: "রেন্ট ফি এবং ডেলিভারি চার্জ একসাথে সেলস রিপ্রেজেন্টেটিভ এর নিকট জমা দিতে হবে। ড্রেস দেরিতে ফেরত দিলে অতিরিক্ত চার্জ প্রযোজ্য হবে।",
    },


    {
      id: 3,
      text: "ড্রেস রেন্ট নেয়ার সময় যেমন ছিল তেমন অবস্থায় ফেরত দিতে হবে। কোন ধরনের ক্ষতি (দাগ,ছিড়া, ফাটা) বা পরিবর্তনের জন্য জরিমানা অথবা অতিরিক্ত চার্জ দিতে হবে।",
    },
    {
      id: 4,
      text: "চুক্তির তারিখের পরে ড্রেস রিটার্ন দিলে বিলম্বিত ফি প্রযোজ্য হবে। এই ফি ড্রেস রিটার্ন দেওয়া পর্যন্ত দৈনিক ভাবে চার্জ হবে।",
    },
    {
      id: 5,
      text: "বুকিং এর পর কোন ধরণের পরিবর্তন অথবা বাতিল গ্রহণযোগ্য হবে না।",
    },
    {
      id: 6,
      text: "গ্রাহক রেন্ট নেওয়া আইটেমের  চুরি বা ক্ষতির জন্য দায়ী থাকবে । রেন্ট নেওয়া আইটেম রেন্ট নেয়া আইটেমের দ্বারা সৃষ্ট কোন আঘাত বা ক্ষতির জন্য কর্তৃপক্ষ দায়ি থাকবে না।",
    },
    {
      id: 7,
      text: "গ্রাহক কর্তিক প্রদত্ত ব্যক্তিগত তথ্য শুধুমাত্র রেন্ট চুক্তি প্রক্রিয়া করার উদ্দেশ্যে ব্যবহৃত হবে এবং তৃতীয় পক্ষের নিকট তথ্য সরবরাহ করা হবে না।",
    },
    {
      id: 8,
      text: "The Thread story কর্তৃপক্ষ যেকোনো সময়ে এই শর্তাবলী সংশোধন করার অধিকার রাখে। গ্রাহকদের তাদের পরবর্তী রেন্ট এর যেকোনো পরিবর্তনের বিষয়ে অবহিত করা হবে।",
    },
  ];

  return (
    <>
      <div className="flex flex-wrap gap-3">
        <button
          className="text-gray-300"
          key={size}
          onClick={() => handleOpen(size)}
        >
          Terms Of Rent
        </button>
      </div>
      <Modal backdrop="blur" isOpen={isOpen} size="5xl" onClose={onClose}>
        <ModalContent className="bg-white text-black">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 ">
                আসসালামু আলাইকুম, আমাদের The Thread story আউটলেট থেকে রেণ্টাল
                সার্ভিসের জন্য নিম্নোক্ত শর্তাবলী মেনে চলুন,
              </ModalHeader>
              <ModalBody>
  <ul className="list-none">
    {termsData.map((term) => (
      <li
        key={term.id}
        className="flex items-start gap-4 mb-3 text-[12px] md:text-md"
      >
        <div className="flex-shrink-0">
          <FaRegCircle className="text-[#650934] bg-[#650934] rounded-full text-[12px] mt-[5px]" />
        </div>
        <div className="flex-grow">
          <span>{term.text}</span>
        </div>
      </li>
    ))}
  </ul>
  <p>ধন্যবাদ The Thread story কর্তৃপক্ষ।</p>
</ModalBody>

              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                {/* <Button color="primary" onPress={onClose}>
                  Action
                </Button> */}
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
