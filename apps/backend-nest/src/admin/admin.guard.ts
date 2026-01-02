import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";

@Injectable()
export class AdminGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const key = request.headers["x-admin-key"];
    const expected = process.env.ADMIN_API_KEY || "changeme-admin-key";

    if (!key || key !== expected) {
      throw new UnauthorizedException("Invalid admin key.");
    }

    return true;
  }
}
