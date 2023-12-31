import { Module } from "@nestjs/common";
import { CommandDatabaseProvider } from "./cmd-db.provider";

@Module({
    providers: [...CommandDatabaseProvider,],
    exports: [...CommandDatabaseProvider]
})

export class CommandDatabasesModule {}