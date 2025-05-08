import { MdPreview } from "react-icons/md";
import { FormElements } from "./FormElements";
import useDesigner from "./hooks/useDesigner";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

const PreviewDialogBtn = () => {
  const { elements } = useDesigner();
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"outline"} className="gap-2">
          <MdPreview className="h-6 w-6" />
          Preview
        </Button>
      </DialogTrigger>
      <DialogContent className="flex h-screen max-h-screen w-screen max-w-full flex-grow flex-col gap-0 p-0">
        <DialogHeader>
          <DialogTitle className="text-muted-foreground text-lg font-bold">
            Form preview
          </DialogTitle>
          <DialogDescription className="text-muted-foreground text-sm">
            This is how your form will look like to your users.
          </DialogDescription>
        </DialogHeader>

        <div className="bg-accent flex flex-grow flex-col items-center justify-center overflow-y-auto bg-[url(/paper.svg)] p-4 dark:bg-[url(/paper-dark.svg)]">
          <div className="bg-background flex h-full w-full max-w-[620px] flex-grow flex-col gap-4 overflow-y-auto rounded-3xl p-8">
            {elements.map((element) => {
              const FormComponent = FormElements[element.type].formComponent;
              return (
                <FormComponent key={element.id} elementInstance={element} />
              );
            })}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PreviewDialogBtn;
