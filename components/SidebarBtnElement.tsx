import { cn } from "@/lib/utils";
import { useDraggable } from "@dnd-kit/core";
import { FormElement } from "./FormElements";
import { Button } from "./ui/button";

const SidebarBtnElement = ({ formElement }: { formElement: FormElement }) => {
  const { label, icon: Icon } = formElement.designerBtnElement;
  const draggable = useDraggable({
    id: `designer-btn-${formElement.type}`,
    data: {
      type: formElement.type,
      isDesignerBtnElement: true,
    },
  });
  return (
    <Button
      ref={draggable.setNodeRef}
      className={cn(
        "flex h-[120px] w-[120px] cursor-grab flex-col gap-2",
        draggable.isDragging && "ring-primary ring-2",
      )}
      variant={"outline"}
      {...draggable.listeners}
      {...draggable.attributes}
    >
      <Icon className="text-primary h-8 w-8 cursor-grab" />
      <p className="text-xs">{label}</p>
    </Button>
  );
};

export const SidebarBtnElementDragOverlay = ({
  formElement,
}: {
  formElement: FormElement;
}) => {
  const { label, icon: Icon } = formElement.designerBtnElement;
  const draggable = useDraggable({
    id: `designer-btn-${formElement.type}`,
    data: {
      type: formElement.type,
      isDesignerBtnElement: true,
    },
  });
  return (
    <Button
      className="flex h-[120px] w-[120px] cursor-grab flex-col gap-2"
      variant={"outline"}
      {...draggable.listeners}
    >
      <Icon className="text-primary h-8 w-8 cursor-grab" />
      <p className="text-xs">{label}</p>
    </Button>
  );
};

export default SidebarBtnElement;
