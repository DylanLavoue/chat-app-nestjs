import { Controller, Inject } from '@nestjs/common';
import { Routes, Services } from 'src/utils/types';
import { IAuthService } from './auth';

@Controller(Routes.AUTH)
export class AuthController {
  private authService: IAuthService;

  constructor(@Inject(Services.AUTH) authService: IAuthService) {
    this.authService = authService;
  }
}
