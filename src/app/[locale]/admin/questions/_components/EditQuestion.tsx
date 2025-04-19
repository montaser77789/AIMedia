"use client";
import { Question } from "@prisma/client";
import React, { useActionState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { EditIcon } from "lucide-react";
import useFormFields from "@/app/hooks/useFormFields";
import { Pages, Routes } from "@/components/constants/enum";
import FormFields from "@/components/form-fields/form-fields";
import { validationErrors } from "@/validation/auth";
import { editquestion } from "../_action/addquestion";
import { toast } from "sonner";

type InitialStateType = {
  message?: string;
  error?: validationErrors;
  status?: number | null;
};
const initialState: InitialStateType = {
  message: "",
  error: {},
  status: null,
};

const EditQuestion = ({ question }: { question: Question }) => {
  const { getFormFields } = useFormFields({
    slug: `/${Routes.ADMIN}/${Pages.QUESTIONS}`,
  });
  const [state, action, pending]= useActionState(
    editquestion.bind(null, question?.id),
    initialState
  );

  useEffect(() => {
    if (state.message) {
      toast(state.message, {
        className: state.status === 200 ? "text-green-400" : "text-destructive",
      });
    }
  }, [state.message, state.status]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <EditIcon />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[640px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-left">Edit Question</DialogTitle>
        </DialogHeader>
        <form action={action} className="grid gap-4 py-4">
          <div className="grid grid-cols-1 gap-4">
            {getFormFields().map((field) => {
              const fieldValue = question[field.name as keyof Question];

              return (
                <div key={field.name} className="mb-3">
                  <FormFields
                    {...field}
                    error={state?.error}
                    defaultValue={fieldValue as string}
                  />
                </div>
              );
            })}
          </div>

          <DialogFooter>
            <Button type="submit">
              {pending ? "Saving..." : "Save changes"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditQuestion;
