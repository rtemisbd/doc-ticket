import { Button } from "@nextui-org/button";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/modal";
import { ReactNode, useState } from "react";

interface IProps {
  buttonText: string;
  title: string;
  children: ReactNode;

  buttonClassName?: string;
  modalSize?:
    | "xs"
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "full"
    | undefined;
}

export default function DOCModal({
  buttonText,
  title,
  children,

  buttonClassName,
  modalSize,
}: IProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = useState("md");

  const handleOpen = (size: any) => {
    setSize(size);
    onOpen();
  };

  return (
    <>
      <button
        className={buttonClassName}
        // variant={buttonVariant}
        onClick={onOpen}
      >
        {buttonText}
      </button>
      <Modal backdrop="blur" isOpen={isOpen} size={modalSize} onClose={onClose}>
        <ModalContent className="bg-white text-black">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
              <ModalBody>{children}</ModalBody>
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
