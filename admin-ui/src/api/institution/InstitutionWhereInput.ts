import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type InstitutionWhereInput = {
  address?: StringNullableFilter;
  id?: StringFilter;
  instituteName?: StringFilter;
  phone?: StringNullableFilter;
};
