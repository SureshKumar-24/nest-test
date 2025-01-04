import { Module } from '@nestjs/common';
import { UsersControllers } from './users.controller';
import {UsersStore} from './users.store'
@Module({
  imports: [],
  controllers: [UsersControllers],
  // providers:[{provide:UsersStore,useClass:UsersStore}]
  providers:[UsersStore]
})
export class AppModule {}
