import { Controller } from "@nestjs/common";
import { UsersStore } from "./users.store";

@Controller("/users")
export class UsersControllers {
  constructor(private store: UsersStore) {}
}
