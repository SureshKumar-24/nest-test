import { Injectable, Module } from "@nestjs/common";
import { UsersControllers } from "./users.controller";
import { UsersStore } from "./users.store";
import { BehaviorSubject, ReplaySubject } from "rxjs";

const IS_DEV_MODE = false;
@Injectable()
class EnvConfig{
  envType: "DEV"| "STAGE"| "PROD"

  constructor() {
    this.envType="DEV"
  }
}
@Module({
  imports: [],
  controllers: [UsersControllers],
  providers: [
    {
      provide: "EVENT_STORE",
      useFactory: (config:EnvConfig, limit: number) => {
        const eventBus$ = config.envType ==='DEV'
          ? new ReplaySubject(2)
          : new BehaviorSubject(null);

          console.log(config, limit)
        return eventBus$;
      },
      inject: [EnvConfig,{ token: "LIMIT", optional: true }],
    },
    EnvConfig,
    {
      provide: "LIMIT",
      useValue: 2,
    },
  ],
})
export class AppModule {}
