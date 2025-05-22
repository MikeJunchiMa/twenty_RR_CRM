import { Module } from '@nestjs/common';

import { ContactCreationManagerModule } from 'src/modules/contact-creation-manager/contact-creation-manager.module';
import { RingCentralWebhookService } from 'src/modules/ringcentral-integration/services/ringcentral-webhook.service';

@Module({
  imports: [ContactCreationManagerModule],
  providers: [RingCentralWebhookService],
  exports: [RingCentralWebhookService],
})
export class RingCentralIntegrationModule {}
