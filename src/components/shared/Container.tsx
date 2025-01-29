const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container mx-auto max-w-7xl px-3 flex-grow">{children}</div>
  );
};

export default Container;
