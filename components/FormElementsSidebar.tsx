import { FormElements } from "./FormElements";
import SidebarBtnElement from "./SidebarBtnElement";
import { Separator } from "./ui/separator";

const FormElementsSidebar = () => {
  return (
    <div>
      <p className="text-foreground/70 text-sm">Drag and drop elements</p>
      <Separator className="my-2" />
      <div className="grid grid-cols-1 place-items-center gap-2 md:grid-cols-2">
        <p className="text-muted-foreground col-span-1 my-2 place-self-start text-sm md:col-span-2">
          Layout elements
        </p>
        <SidebarBtnElement formElement={FormElements.TitleField} />
        <SidebarBtnElement formElement={FormElements.SubTitleField} />
        <SidebarBtnElement formElement={FormElements.ParagraphField} />
        <SidebarBtnElement formElement={FormElements.SeparatorField} />
        <SidebarBtnElement formElement={FormElements.SpacerField} />

        <p className="text-muted-foreground col-span-1 my-2 place-self-start text-sm md:col-span-2">
          Form elements
        </p>
        <SidebarBtnElement formElement={FormElements.TextField} />
        <SidebarBtnElement formElement={FormElements.NumberField} />
        <SidebarBtnElement formElement={FormElements.TextAreaField} />
        <SidebarBtnElement formElement={FormElements.DateField} />
        <SidebarBtnElement formElement={FormElements.SelectField} />
        <SidebarBtnElement formElement={FormElements.CheckboxField} />
      </div>
    </div>
  );
};

export default FormElementsSidebar;
