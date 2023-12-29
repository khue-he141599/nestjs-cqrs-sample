import { Body, Controller, Post, Response } from '@nestjs/common';
import { CreatedUserCommand } from './command/user-created.command';
import { CommandBus } from '@nestjs/cqrs';

@Controller()
export class UserController {
  constructor(private readonly commandBus: CommandBus) {}

  @Post()
  async createUser(@Body() createUserDto: any, @Response() res: any) {
    const command = new CreatedUserCommand(createUserDto.username);
    const rs = await this.commandBus.execute(command);
    return res.json({
      rs: rs + 'dsfsdf',
    });
  }
}
