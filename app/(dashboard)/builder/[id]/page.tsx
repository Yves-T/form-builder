import { GetFormById } from "@/actions/form";
import FormBuilder from "@/components/FormBuilder";

const BuilderPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const form = await GetFormById(Number(id));
  if (!form) {
    throw new Error("Form not fund");
  }
  return <FormBuilder form={form} />;
};

export default BuilderPage;
