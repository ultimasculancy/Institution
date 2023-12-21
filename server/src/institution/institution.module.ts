import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { InstitutionModuleBase } from "./base/institution.module.base";
import { InstitutionService } from "./institution.service";
import { InstitutionController } from "./institution.controller";
import { InstitutionResolver } from "./institution.resolver";

@Module({
  imports: [InstitutionModuleBase, forwardRef(() => AuthModule)],
  controllers: [InstitutionController],
  providers: [InstitutionService, InstitutionResolver],
  exports: [InstitutionService],
})
export class InstitutionModule {}
