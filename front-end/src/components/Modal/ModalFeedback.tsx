"use client";

import Link from "next/link";
import DOCModal from "./DOCModal";
 
 

interface IProps {
  id: string;
  buttonClass:string
}

const ModelFeedback = ({ id ,buttonClass}: IProps) => {
  return (
    <DOCModal  
      title="Feedback"
      buttonText="Feedback"
      buttonClassName={buttonClass}
      modalSize="3xl"
    >
      <div>
        You are not currently logged in. Please login first to continue.
      </div>
     
    </DOCModal>
  );
};

export default ModelFeedback;