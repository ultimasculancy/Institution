import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const InstitutionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Address" multiline source="address" />
        <TextInput label="institute_name" source="instituteName" />
        <TextInput label="phone" source="phone" />
      </SimpleForm>
    </Create>
  );
};
