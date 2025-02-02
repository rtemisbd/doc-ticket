import Footer from "@/components/shared/Footer";
import NavbarHeader from "@/components/shared/NavbarHeader";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className=" ">
        <NavbarHeader />
        <main>{children}</main>
      </div>

      <Footer />
    </div>
  );
};

export default layout;
