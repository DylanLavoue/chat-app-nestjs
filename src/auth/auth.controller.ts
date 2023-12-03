import { Controller, Inject, Post, Body, Get } from '@nestjs/common';
import { Routes, Services } from 'src/utils/constants';
import { IAuthService } from './auth';
import { CreateUserDto } from './dtos/CreateUser.dto';
import { UserService } from 'src/users/user.service';

@Controller(Routes.AUTH)
export class AuthController {
  private authService: IAuthService;

  constructor(
    @Inject(Services.AUTH) authService: IAuthService,
    @Inject(Services.USERS) private userService: UserService,
  ) {
    this.authService = authService;
  }

  @Post('register')
  registerUser(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto);
    this.userService.createUser();
  }

  @Post('login')
  login() {}

  @Get('status')
  status() {
    console.log('coucou');
  }

  @Post('logout')
  logout() {}
}
