import { Injectable } from '@nestjs/common';

import { FieldActorSource } from 'src/engine/metadata-modules/field-metadata/composite-types/actor.composite-type';
import { CreateContactService } from 'src/modules/contact-creation-manager/services/create-contact.service';

export interface RingCentralCallerInfo {
  phoneNumber?: string;
  extensionNumber?: string;
  name?: string;
}

export interface RingCentralWebhookDto {
  from: RingCentralCallerInfo;
  to: RingCentralCallerInfo;
}

@Injectable()
export class RingCentralWebhookService {
  constructor(private readonly createContactService: CreateContactService) {}

  async handleIncomingCall(
    webhook: RingCentralWebhookDto,
    workspaceId: string,
  ) {
    const phoneNumber =
      webhook.from.phoneNumber || webhook.from.extensionNumber;
    if (!phoneNumber) return;

    await this.createContactService.createPeople(
      [
        {
          handle: phoneNumber,
          displayName: webhook.from.name,
          companyId: undefined,
          createdBySource: FieldActorSource.TELEPHONY,
          createdByWorkspaceMember: null,
          createdByContext: { provider: undefined },
        },
      ],
      workspaceId,
    );
  }
}
