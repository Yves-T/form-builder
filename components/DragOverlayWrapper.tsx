import { Active, DragOverlay, useDndMonitor } from "@dnd-kit/core";
import { useState } from "react";
import { ElementsType, FormElements } from "./FormElements";
import { SidebarBtnElementDragOverlay } from "./SidebarBtnElement";
import useDesigner from "./hooks/useDesigner";

const DragOverlayWrapper = () => {
  const { elements } = useDesigner();
  const [draggedItem, setDraggedItem] = useState<Active | null>(null);
  useDndMonitor({
    onDragStart: (event) => {
      setDraggedItem(event.active);
    },
    onDragCancel: () => {
      setDraggedItem(null);
    },
    onDragEnd: () => {
      setDraggedItem(null);
    },
  });

  if (!draggedItem) return null;

  let node = <div>No drag overlay</div>;
  const isSidebarBtnElement = draggedItem?.data?.current?.isDesignerBtnElement;

  if (isSidebarBtnElement) {
    const type = draggedItem.data?.current?.type as ElementsType;
    console.log("type", type);
    node = <SidebarBtnElementDragOverlay formElement={FormElements[type]} />;
  }

  const isDesignerElement = draggedItem.data?.current?.isDesignerElement;
  if (isDesignerElement) {
    const elementId = draggedItem.data?.current?.elementId;
    const element = elements.find((el) => el.id === elementId);
    if (!element) {
      node = <div>Element not found!</div>;
    } else {
      const DesignerElementComponent =
        FormElements[element.type].designerComponent;
      node = (
        <div className="bg-accent pointer-events-none flex h-[120px] w-full rounded-md border px-4 py-2 opacity-80">
          <DesignerElementComponent elementInstance={element} />;
        </div>
      );
    }
  }

  return <DragOverlay>{node}</DragOverlay>;
};

export default DragOverlayWrapper;
