import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return <div className="w-full">{children}</div>;
};

export default layout;
