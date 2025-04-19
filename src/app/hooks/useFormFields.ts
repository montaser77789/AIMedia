import { Pages, Routes } from "@/components/constants/enum";
import { IFormField, IFormFieldsVariables } from "@/types/app";

const useFormFields = ({ slug }: IFormFieldsVariables) => {
  const loginFields = (): IFormField[] => [
    {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "Email",
      autoFocus: true,
    },
    {
      label: "Password",
      name: "password",
      placeholder: "Password",
      type: "password",
    },
  ];

  const questionFields = (): IFormField[] => [
    {
      label: "Question English",
      name: "question_en",
      type: "textarea",
      placeholder: "Question",
      autoFocus: true,
    },
    {
      label: "Answer English",
      name: "answer_en",
      placeholder: "Answer",
      type: "textarea",
    },
    {
      label: "Question Arabic",
      name: "question_ar",
      type: "textarea",
      placeholder: "Question",
      autoFocus: true,
    },
    {
      label: "Answer Arabic",
      name: "answer_ar",
      placeholder: "Answer",
      type: "textarea",
    },
  ];

  const getFormFields = (): IFormField[] => {
    switch (slug) {
      case Pages.LOGIN:
        return loginFields();
      case `/${Routes.ADMIN}/${Pages.QUESTIONS}`:
        return questionFields();
      default:
        return [];
    }
  };

  return { getFormFields };
};

export default useFormFields;
