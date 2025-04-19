"use client";

import useFormFields from "@/app/hooks/useFormFields";
import { Pages, Routes } from "@/components/constants/enum";
import FormFields from "@/components/form-fields/form-fields";
import { validationErrors } from "@/validation/auth";
import React, { useActionState } from "react";
import { addquestion } from "../_action/addquestion";
import { Button } from "@/components/ui/button";

const Form = () => {
  const { getFormFields } = useFormFields({
    slug: `/${Routes.ADMIN}/${Pages.QUESTIONS}`,
  });
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
  const [state, action, pending] = useActionState(addquestion, initialState);

  return (
    <form action={action}>
      {getFormFields().map((field) => (
        <div key={field.name} className="mb-3">
          <FormFields
            {...field}
            error={state?.error}
            // defaultValue={fieldValue as string}
          />
        </div>
      ))}
      <Button type="submit" disabled={pending}>
        {pending ? "Submitting..." : "Submit"}
      </Button>
    </form>
  );
};

export default Form;
