import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { InstitutionService } from "./institution.service";
import { InstitutionControllerBase } from "./base/institution.controller.base";

@swagger.ApiTags("institutions")
@common.Controller("institutions")
export class InstitutionController extends InstitutionControllerBase {
  constructor(
    protected readonly service: InstitutionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
