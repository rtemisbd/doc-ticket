"use client";
import { Button } from "@nextui-org/button";
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
      <div className="mb-4 mt-2 flex gap-2">
        <Link className="flex-1" href={`/register?redirect=found-items/${id}`}>
          <Button className="w-full">Register</Button>
        </Link>
        <Link className="flex-1" href={`/login?redirect=found-items/${id}`}>
          <Button className="w-full">Login</Button>
        </Link>
      </div>
    </DOCModal>
  );
};

export default ModelFeedback;