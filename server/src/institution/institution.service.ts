import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { InstitutionServiceBase } from "./base/institution.service.base";

@Injectable()
export class InstitutionService extends InstitutionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
