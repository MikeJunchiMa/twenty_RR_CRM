import { Injectable } from '@nestjs/common';

import { OnDatabaseBatchEvent } from 'src/engine/api/graphql/graphql-query-runner/decorators/on-database-batch-event.decorator';
import { DatabaseEventAction } from 'src/engine/api/graphql/graphql-query-runner/enums/database-event-action';
import { WorkspaceEventBatch } from 'src/engine/workspace-event-emitter/types/workspace-event.type';
import { ObjectRecordUpdateEvent } from 'src/engine/core-modules/event-emitter/types/object-record-update.event';
import { OpportunityWorkspaceEntity } from 'src/modules/opportunity/standard-objects/opportunity.workspace-entity';
import { TaskWorkspaceEntity } from 'src/modules/task/standard-objects/task.workspace-entity';
import { FieldActorSource } from 'src/engine/metadata-modules/field-metadata/composite-types/actor.composite-type';
import { TwentyORMGlobalManager } from 'src/engine/twenty-orm/twenty-orm-global.manager';

@Injectable()
export class OpportunityStageAutomationListener {
  constructor(
    private readonly twentyORMGlobalManager: TwentyORMGlobalManager,
  ) {}

  @OnDatabaseBatchEvent('opportunity', DatabaseEventAction.UPDATED)
  async handleStageChange(
    payload: WorkspaceEventBatch<
      ObjectRecordUpdateEvent<OpportunityWorkspaceEntity>
    >,
  ) {
    for (const event of payload.events) {
      const diff = event.properties.diff;
      if (!diff?.stage || diff.stage.before === diff.stage.after) continue;

      const taskRepository =
        await this.twentyORMGlobalManager.getRepositoryForWorkspace(
          payload.workspaceId,
          TaskWorkspaceEntity,
          { shouldBypassPermissionChecks: true },
        );

      await taskRepository.save({
        title: `Follow up for opportunity stage ${diff.stage.after}`,
        createdBy: {
          source: FieldActorSource.SYSTEM,
          workspaceMemberId: null,
          name: 'Stage Automation',
          context: {},
        },
      });
    }
  }
}
