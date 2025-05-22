import { msg } from '@lingui/core/macro';
import { FieldMetadataType } from 'twenty-shared/types';

import { ActorMetadata } from 'src/engine/metadata-modules/field-metadata/composite-types/actor.composite-type';
import { CurrencyMetadata } from 'src/engine/metadata-modules/field-metadata/composite-types/currency.composite-type';
import { BaseWorkspaceEntity } from 'src/engine/twenty-orm/base.workspace-entity';
import { WorkspaceEntity } from 'src/engine/twenty-orm/decorators/workspace-entity.decorator';
import { WorkspaceField } from 'src/engine/twenty-orm/decorators/workspace-field.decorator';
import { WorkspaceIsNullable } from 'src/engine/twenty-orm/decorators/workspace-is-nullable.decorator';
import { WorkspaceIsSearchable } from 'src/engine/twenty-orm/decorators/workspace-is-searchable.decorator';
import { STANDARD_OBJECT_ICONS } from 'src/engine/workspace-manager/workspace-sync-metadata/constants/standard-object-icons';
import { STANDARD_OBJECT_IDS } from 'src/engine/workspace-manager/workspace-sync-metadata/constants/standard-object-ids';
import { QUOTE_STANDARD_FIELD_IDS } from 'src/engine/workspace-manager/workspace-sync-metadata/constants/standard-field-ids';

@WorkspaceEntity({
  standardId: STANDARD_OBJECT_IDS.quote,
  namePlural: 'quotes',
  labelSingular: msg`Quote`,
  labelPlural: msg`Quotes`,
  description: msg`A sales quote`,
  icon: STANDARD_OBJECT_ICONS.quote,
  shortcut: 'Q',
  labelIdentifierStandardId: QUOTE_STANDARD_FIELD_IDS.name,
})
@WorkspaceIsSearchable()
export class QuoteWorkspaceEntity extends BaseWorkspaceEntity {
  @WorkspaceField({
    standardId: QUOTE_STANDARD_FIELD_IDS.name,
    type: FieldMetadataType.TEXT,
    label: msg`Name`,
    description: msg`Quote name`,
    icon: 'IconFileText',
  })
  name: string;

  @WorkspaceField({
    standardId: QUOTE_STANDARD_FIELD_IDS.amount,
    type: FieldMetadataType.CURRENCY,
    label: msg`Amount`,
    description: msg`Quote amount`,
    icon: 'IconCurrencyDollar',
  })
  @WorkspaceIsNullable()
  amount: CurrencyMetadata | null;

  @WorkspaceField({
    standardId: QUOTE_STANDARD_FIELD_IDS.version,
    type: FieldMetadataType.NUMBER,
    label: msg`Version`,
    description: msg`Quote version`,
    icon: 'IconLayersLinked',
    defaultValue: 1,
  })
  version: number;

  @WorkspaceField({
    standardId: QUOTE_STANDARD_FIELD_IDS.status,
    type: FieldMetadataType.SELECT,
    label: msg`Status`,
    description: msg`Quote status`,
    icon: 'IconProgressCheck',
    options: [
      { value: 'DRAFT', label: 'Draft', position: 0, color: 'sky' },
      { value: 'SENT', label: 'Sent', position: 1, color: 'purple' },
      { value: 'SIGNED', label: 'Signed', position: 2, color: 'green' },
    ],
    defaultValue: "'DRAFT'",
  })
  status: string;

  @WorkspaceField({
    standardId: QUOTE_STANDARD_FIELD_IDS.createdBy,
    type: FieldMetadataType.ACTOR,
    label: msg`Created by`,
    icon: 'IconCreativeCommonsSa',
    description: msg`The creator of the record`,
  })
  createdBy: ActorMetadata;
}
