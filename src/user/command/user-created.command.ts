import { ICommand } from '@nestjs/cqrs';

export class CreatedUserCommand implements ICommand {
  constructor(public readonly username: string) {}
}
