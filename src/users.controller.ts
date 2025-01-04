import { Body, Controller, Post, Get, Param } from "@nestjs/common";
import { CreateUserDTO } from "./dto";
const USERS = [];
@Controller("/users")
export class UsersControllers {
  @Post()
  addUser(@Body() createUserDto: CreateUserDTO) {
    USERS.push(createUserDto);
    return "User Added Successfully";
  }

  @Get()
  getUsers() {
    return USERS;
  }

  @Get(":id")
  getUser(@Param("id") id: number) {
    return USERS.find((user)=> user.id === +id);
  }
}
