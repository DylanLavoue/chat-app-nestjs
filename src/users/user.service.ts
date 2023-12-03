import { Injectable } from '@nestjs/common';
import { IUserService } from './user';
import { CreateUserDetails } from 'src/utils/types';

@Injectable()
export class UserService implements IUserService {
  createUser(userDeatils : CreateUserDetails) {
    console.log('UserService.createUser');
  }
}
