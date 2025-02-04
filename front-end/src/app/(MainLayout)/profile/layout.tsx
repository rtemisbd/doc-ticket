 
import Container from "@/components/shared/Container";
import Sidebar from "@/app/(MainLayout)/profile/_components/Sidebar";
import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <Container>
      <div className="my-8 flex w-full gap-12 mx-auto ">
        <div className="w-2/5 hidden md:block">
          <Sidebar />
        </div>
        <div className="md:w-4/5  px-4 pt-2 shadow-lg">{children}</div>
      </div>
    </Container>
  );    
};

export default layout;
