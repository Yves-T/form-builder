import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="mx-auto flex w-full flex-grow flex-col">{children}</div>
  );
};

export default layout;
