import { msg } from '@lingui/core/macro';
import { FieldMetadataType } from 'twenty-shared/types';

import { RelationOnDeleteAction } from 'src/engine/metadata-modules/field-metadata/interfaces/relation-on-delete-action.interface';
import { RelationType } from 'src/engine/metadata-modules/field-metadata/interfaces/relation-type.interface';
import { Relation } from 'src/engine/workspace-manager/workspace-sync-metadata/interfaces/relation.interface';

import { SEARCH_VECTOR_FIELD } from 'src/engine/metadata-modules/constants/search-vector-field.constants';
import { AddressMetadata } from 'src/engine/metadata-modules/field-metadata/composite-types/address.composite-type';
import { ActorMetadata } from 'src/engine/metadata-modules/field-metadata/composite-types/actor.composite-type';
import { IndexType } from 'src/engine/metadata-modules/index-metadata/index-metadata.entity';
import { BaseWorkspaceEntity } from 'src/engine/twenty-orm/base.workspace-entity';
import { WorkspaceEntity } from 'src/engine/twenty-orm/decorators/workspace-entity.decorator';
import { WorkspaceFieldIndex } from 'src/engine/twenty-orm/decorators/workspace-field-index.decorator';
import { WorkspaceField } from 'src/engine/twenty-orm/decorators/workspace-field.decorator';
import { WorkspaceIsNullable } from 'src/engine/twenty-orm/decorators/workspace-is-nullable.decorator';
import { WorkspaceIsSearchable } from 'src/engine/twenty-orm/decorators/workspace-is-searchable.decorator';
import { WorkspaceRelation } from 'src/engine/twenty-orm/decorators/workspace-relation.decorator';
import { WorkspaceJoinColumn } from 'src/engine/twenty-orm/decorators/workspace-join-column.decorator';
import { WorkspaceIsSystem } from 'src/engine/twenty-orm/decorators/workspace-is-system.decorator';
import {
  FieldTypeAndNameMetadata,
  getTsVectorColumnExpressionFromFields,
} from 'src/engine/workspace-manager/workspace-sync-metadata/utils/get-ts-vector-column-expression.util';
import { SHIPMENT_STANDARD_FIELD_IDS } from 'src/engine/workspace-manager/workspace-sync-metadata/constants/standard-field-ids';
import { STANDARD_OBJECT_ICONS } from 'src/engine/workspace-manager/workspace-sync-metadata/constants/standard-object-icons';
import { STANDARD_OBJECT_IDS } from 'src/engine/workspace-manager/workspace-sync-metadata/constants/standard-object-ids';
import { CompanyWorkspaceEntity } from 'src/modules/company/standard-objects/company.workspace-entity';
import { TruckWorkspaceEntity } from 'src/modules/truck/standard-objects/truck.workspace-entity';
import { AttachmentWorkspaceEntity } from 'src/modules/attachment/standard-objects/attachment.workspace-entity';
import { TimelineActivityWorkspaceEntity } from 'src/modules/timeline/standard-objects/timeline-activity.workspace-entity';

const TRACKING_FIELD_NAME = 'trackingNumber';

export const SEARCH_FIELDS_FOR_SHIPMENT: FieldTypeAndNameMetadata[] = [
  { name: TRACKING_FIELD_NAME, type: FieldMetadataType.TEXT },
];

@WorkspaceEntity({
  standardId: STANDARD_OBJECT_IDS.shipment,
  namePlural: 'shipments',
  labelSingular: msg`Shipment`,
  labelPlural: msg`Shipments`,
  description: msg`A shipment`,
  icon: STANDARD_OBJECT_ICONS.shipment,
})
@WorkspaceIsSearchable()
export class ShipmentWorkspaceEntity extends BaseWorkspaceEntity {
  @WorkspaceField({
    standardId: SHIPMENT_STANDARD_FIELD_IDS.trackingNumber,
    type: FieldMetadataType.TEXT,
    label: msg`Tracking Number`,
    description: msg`Shipment tracking number`,
    icon: 'IconNumbers',
  })
  trackingNumber: string;

  @WorkspaceField({
    standardId: SHIPMENT_STANDARD_FIELD_IDS.originAddress,
    type: FieldMetadataType.ADDRESS,
    label: msg`Origin`,
    description: msg`Shipment origin address`,
    icon: 'IconMapPin',
  })
  @WorkspaceIsNullable()
  originAddress: AddressMetadata | null;

  @WorkspaceField({
    standardId: SHIPMENT_STANDARD_FIELD_IDS.destinationAddress,
    type: FieldMetadataType.ADDRESS,
    label: msg`Destination`,
    description: msg`Shipment destination address`,
    icon: 'IconMapPin',
  })
  @WorkspaceIsNullable()
  destinationAddress: AddressMetadata | null;

  @WorkspaceField({
    standardId: SHIPMENT_STANDARD_FIELD_IDS.weight,
    type: FieldMetadataType.NUMBER,
    label: msg`Weight`,
    description: msg`Shipment weight`,
    icon: 'IconWeight',
  })
  @WorkspaceIsNullable()
  weight: number | null;

  @WorkspaceField({
    standardId: SHIPMENT_STANDARD_FIELD_IDS.status,
    type: FieldMetadataType.SELECT,
    label: msg`Status`,
    description: msg`Shipment status`,
    icon: 'IconPackage',
    options: [
      { value: 'PENDING', label: 'Pending', position: 0, color: 'gray' },
      { value: 'IN_TRANSIT', label: 'In Transit', position: 1, color: 'blue' },
      { value: 'DELIVERED', label: 'Delivered', position: 2, color: 'green' },
    ],
    defaultValue: "'PENDING'",
  })
  status: string;

  @WorkspaceRelation({
    standardId: SHIPMENT_STANDARD_FIELD_IDS.company,
    type: RelationType.MANY_TO_ONE,
    label: msg`Company`,
    description: msg`Customer company`,
    icon: 'IconBuildingSkyscraper',
    inverseSideTarget: () => CompanyWorkspaceEntity,
    inverseSideFieldKey: 'shipments',
    onDelete: RelationOnDeleteAction.SET_NULL,
  })
  @WorkspaceIsNullable()
  company: Relation<CompanyWorkspaceEntity> | null;

  @WorkspaceJoinColumn('company')
  companyId: string | null;

  @WorkspaceRelation({
    standardId: SHIPMENT_STANDARD_FIELD_IDS.truck,
    type: RelationType.MANY_TO_ONE,
    label: msg`Truck`,
    description: msg`Assigned truck`,
    icon: 'IconTruck',
    inverseSideTarget: () => TruckWorkspaceEntity,
    inverseSideFieldKey: 'shipments',
    onDelete: RelationOnDeleteAction.SET_NULL,
  })
  @WorkspaceIsNullable()
  truck: Relation<TruckWorkspaceEntity> | null;

  @WorkspaceJoinColumn('truck')
  truckId: string | null;

  @WorkspaceRelation({
    standardId: SHIPMENT_STANDARD_FIELD_IDS.attachments,
    type: RelationType.ONE_TO_MANY,
    label: msg`Attachments`,
    description: msg`Shipment attachments`,
    icon: 'IconFileImport',
    inverseSideTarget: () => AttachmentWorkspaceEntity,
    onDelete: RelationOnDeleteAction.CASCADE,
  })
  @WorkspaceIsNullable()
  attachments: Relation<AttachmentWorkspaceEntity[]>;

  @WorkspaceRelation({
    standardId: SHIPMENT_STANDARD_FIELD_IDS.timelineActivities,
    type: RelationType.ONE_TO_MANY,
    label: msg`Timeline Activities`,
    description: msg`Timeline activities linked to the shipment`,
    icon: 'IconTimelineEvent',
    inverseSideTarget: () => TimelineActivityWorkspaceEntity,
    onDelete: RelationOnDeleteAction.CASCADE,
  })
  @WorkspaceIsNullable()
  timelineActivities: Relation<TimelineActivityWorkspaceEntity[]>;

  @WorkspaceField({
    standardId: SHIPMENT_STANDARD_FIELD_IDS.createdBy,
    type: FieldMetadataType.ACTOR,
    label: msg`Created by`,
    icon: 'IconCreativeCommonsSa',
    description: msg`The creator of the record`,
  })
  createdBy: ActorMetadata;

  @WorkspaceField({
    standardId: SHIPMENT_STANDARD_FIELD_IDS.searchVector,
    type: FieldMetadataType.TS_VECTOR,
    label: SEARCH_VECTOR_FIELD.label,
    description: SEARCH_VECTOR_FIELD.description,
    icon: 'IconPackage',
    generatedType: 'STORED',
    asExpression: getTsVectorColumnExpressionFromFields(
      SEARCH_FIELDS_FOR_SHIPMENT,
    ),
  })
  @WorkspaceIsNullable()
  @WorkspaceIsSystem()
  @WorkspaceFieldIndex({ indexType: IndexType.GIN })
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  searchVector: any;
}
