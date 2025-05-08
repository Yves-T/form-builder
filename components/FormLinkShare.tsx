"use client";
import { useEffect, useState } from "react";
import { ImShare } from "react-icons/im";
import { toast } from "sonner";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const FormLinkShare = ({ shareUrl }: { shareUrl: string }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
  const shareLink = `${window.location.origin}/submit/${shareUrl}`;
  return (
    <div className="flex flex-grow items-center gap-4">
      <Input value={shareLink} readOnly />
      <Button
        className="w-[250px]"
        onClick={() => {
          navigator.clipboard.writeText(shareLink);
          toast("Link Copied to clipboard");
        }}
      >
        <ImShare className="mr-2 h-4 w-4" />
        Share link
      </Button>
    </div>
  );
};

export default FormLinkShare;
