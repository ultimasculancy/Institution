import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const InstitutionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Address" source="address" />
        <TextField label="ID" source="id" />
        <TextField label="institute_name" source="instituteName" />
        <TextField label="phone" source="phone" />
      </SimpleShowLayout>
    </Show>
  );
};
