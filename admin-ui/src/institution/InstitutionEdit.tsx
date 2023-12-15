import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const InstitutionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Address" multiline source="address" />
        <TextInput label="institute_name" source="instituteName" />
        <TextInput label="phone" source="phone" />
      </SimpleForm>
    </Edit>
  );
};
