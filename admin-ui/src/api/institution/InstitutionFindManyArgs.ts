import { InstitutionWhereInput } from "./InstitutionWhereInput";
import { InstitutionOrderByInput } from "./InstitutionOrderByInput";

export type InstitutionFindManyArgs = {
  where?: InstitutionWhereInput;
  orderBy?: Array<InstitutionOrderByInput>;
  skip?: number;
  take?: number;
};
