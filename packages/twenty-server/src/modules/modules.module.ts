import { Module } from '@nestjs/common';

import { CalendarModule } from 'src/modules/calendar/calendar.module';
import { ConnectedAccountModule } from 'src/modules/connected-account/connected-account.module';
import { FavoriteFolderModule } from 'src/modules/favorite-folder/favorite-folder.module';
import { FavoriteModule } from 'src/modules/favorite/favorite.module';
import { QuoteModule } from 'src/modules/quote/quote.module';
import { RingCentralIntegrationModule } from 'src/modules/ringcentral-integration/ringcentral-integration.module';
import { OpportunityStageAutomationModule } from 'src/modules/opportunity-stage-automation/opportunity-stage-automation.module';
import { MessagingModule } from 'src/modules/messaging/messaging.module';
import { ViewModule } from 'src/modules/view/view.module';
import { WorkflowModule } from 'src/modules/workflow/workflow.module';

@Module({
  imports: [
    MessagingModule,
    CalendarModule,
    ConnectedAccountModule,
    ViewModule,
    WorkflowModule,
    FavoriteFolderModule,
    FavoriteModule,
    QuoteModule,
    RingCentralIntegrationModule,
    OpportunityStageAutomationModule,
  ],
  providers: [],
  exports: [],
})
export class ModulesModule {}
