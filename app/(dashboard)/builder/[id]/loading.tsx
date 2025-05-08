import { ImSpinner2 } from "react-icons/im";

const Loading = () => {
  return (
    <div className="flex h-full w-full items-center justify-center gap-4">
      Loading
      <ImSpinner2 className="h-12 w-12 animate-spin" />
    </div>
  );
};

export default Loading;
