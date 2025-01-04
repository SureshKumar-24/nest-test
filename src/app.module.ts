import { Module } from '@nestjs/common';
import { UsersControllers } from './users.controller';

@Module({
  imports: [],
  controllers: [UsersControllers],
})
export class AppModule {}
