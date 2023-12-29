import { Injectable } from '@nestjs/common';
import { ICommand, Saga, ofType } from '@nestjs/cqrs';
import { Observable, map } from 'rxjs';
import { CreatedUserCommand } from '../command/user-created.command';
import { UserCreatedEvent } from '../events/user-created.events';

@Injectable()
export class UserSaga {
  constructor() {}

  @Saga()
  querySide = (events$: Observable<any>): Observable<ICommand> => {
    return events$.pipe(
      ofType(UserCreatedEvent),
      map((event: any) => {
        let cmd: ICommand;
        cmd = new CreatedUserCommand(event.username);
        return cmd;
      }),
    );
  };
}
