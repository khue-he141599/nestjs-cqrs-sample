import { Module } from '@nestjs/common';
import { UserCommandSideModule } from './order-command-side/order-cmd-side.module';
import { CommandDatabasesModule } from './database/command/cmd-db.module';

@Module({
  imports: [UserCommandSideModule, CommandDatabasesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
