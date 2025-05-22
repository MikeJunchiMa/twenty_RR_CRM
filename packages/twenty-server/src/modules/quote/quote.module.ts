import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { QuoteWorkspaceEntity } from 'src/modules/quote/standard-objects/quote.workspace-entity';

@Module({
  imports: [TypeOrmModule.forFeature([QuoteWorkspaceEntity], 'workspace')],
  providers: [],
  exports: [],
})
export class QuoteModule {}
