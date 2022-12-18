import { isNotEmpty, isUUID, Length } from 'class-validator';

export class CreateNotificationBody {
  @isNotEmpty()
  @isUUID()
  recipientId: string;

  @isNotEmpty()
  @Length(5, 248)
  content: string;

  @isNotEmpty()
  category: string;
}
