import { Institution as TInstitution } from "../api/institution/Institution";

export const INSTITUTION_TITLE_FIELD = "instituteName";

export const InstitutionTitle = (record: TInstitution): string => {
  return record.instituteName?.toString() || String(record.id);
};
