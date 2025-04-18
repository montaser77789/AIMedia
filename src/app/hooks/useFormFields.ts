import { Pages } from "@/components/constants/enum";
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

  const getFormFields = (): IFormField[] => {
    switch (slug) {
      case Pages.LOGIN:
        return loginFields();
      default:
        return [];
    }
  };

  return { getFormFields };
};

export default useFormFields;
