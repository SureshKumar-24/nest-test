import { Controller, Inject } from "@nestjs/common";
import { UsersStore } from "./users.store";
import { Subject } from "rxjs";

@Controller("/users")
export class UsersControllers {
  constructor(@Inject('EVENT_STORE') private eventbus:Subject<any> ) {
    console.log('this.eventbus',this.eventbus)
  }
}
