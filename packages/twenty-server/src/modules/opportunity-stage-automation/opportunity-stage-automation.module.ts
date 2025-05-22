import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { OpportunityStageAutomationListener } from 'src/modules/opportunity-stage-automation/opportunity-stage-automation.listener';
import { TaskWorkspaceEntity } from 'src/modules/task/standard-objects/task.workspace-entity';
import { OpportunityWorkspaceEntity } from 'src/modules/opportunity/standard-objects/opportunity.workspace-entity';
import { TwentyORMGlobalManager } from 'src/engine/twenty-orm/twenty-orm-global.manager';

@Module({
  imports: [
    TypeOrmModule.forFeature(
      [TaskWorkspaceEntity, OpportunityWorkspaceEntity],
      'workspace',
    ),
  ],
  providers: [OpportunityStageAutomationListener, TwentyORMGlobalManager],
  exports: [],
})
export class OpportunityStageAutomationModule {}
