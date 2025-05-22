import { msg } from '@lingui/core/macro';
import { FieldMetadataType } from 'twenty-shared/types';

import { RelationOnDeleteAction } from 'src/engine/metadata-modules/field-metadata/interfaces/relation-on-delete-action.interface';
import { RelationType } from 'src/engine/metadata-modules/field-metadata/interfaces/relation-type.interface';
import { Relation } from 'src/engine/workspace-manager/workspace-sync-metadata/interfaces/relation.interface';

import { SEARCH_VECTOR_FIELD } from 'src/engine/metadata-modules/constants/search-vector-field.constants';
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
import { TRUCK_STANDARD_FIELD_IDS } from 'src/engine/workspace-manager/workspace-sync-metadata/constants/standard-field-ids';
import { STANDARD_OBJECT_ICONS } from 'src/engine/workspace-manager/workspace-sync-metadata/constants/standard-object-icons';
import { STANDARD_OBJECT_IDS } from 'src/engine/workspace-manager/workspace-sync-metadata/constants/standard-object-ids';
import { ShipmentWorkspaceEntity } from 'src/modules/shipment/standard-objects/shipment.workspace-entity';

const NAME_FIELD_NAME = 'name';
const LICENSE_PLATE_FIELD_NAME = 'licensePlate';

export const SEARCH_FIELDS_FOR_TRUCK: FieldTypeAndNameMetadata[] = [
  { name: NAME_FIELD_NAME, type: FieldMetadataType.TEXT },
  { name: LICENSE_PLATE_FIELD_NAME, type: FieldMetadataType.TEXT },
];

@WorkspaceEntity({
  standardId: STANDARD_OBJECT_IDS.truck,
  namePlural: 'trucks',
  labelSingular: msg`Truck`,
  labelPlural: msg`Trucks`,
  description: msg`A truck`,
  icon: STANDARD_OBJECT_ICONS.truck,
})
@WorkspaceIsSearchable()
export class TruckWorkspaceEntity extends BaseWorkspaceEntity {
  @WorkspaceField({
    standardId: TRUCK_STANDARD_FIELD_IDS.name,
    type: FieldMetadataType.TEXT,
    label: msg`Name`,
    description: msg`Truck name`,
    icon: 'IconTruck',
  })
  name: string;

  @WorkspaceField({
    standardId: TRUCK_STANDARD_FIELD_IDS.licensePlate,
    type: FieldMetadataType.TEXT,
    label: msg`License Plate`,
    description: msg`Truck license plate`,
    icon: 'IconLicense',
  })
  @WorkspaceIsNullable()
  licensePlate: string | null;

  @WorkspaceField({
    standardId: TRUCK_STANDARD_FIELD_IDS.capacity,
    type: FieldMetadataType.NUMBER,
    label: msg`Capacity`,
    description: msg`Truck capacity`,
    icon: 'IconWeight',
  })
  @WorkspaceIsNullable()
  capacity: number | null;

  @WorkspaceField({
    standardId: TRUCK_STANDARD_FIELD_IDS.status,
    type: FieldMetadataType.SELECT,
    label: msg`Status`,
    description: msg`Truck status`,
    icon: 'IconCircleCheck',
    options: [
      { value: 'AVAILABLE', label: 'Available', position: 0, color: 'green' },
      { value: 'IN_USE', label: 'In Use', position: 1, color: 'blue' },
      { value: 'MAINTENANCE', label: 'Maintenance', position: 2, color: 'orange' },
    ],
    defaultValue: "'AVAILABLE'",
  })
  status: string;

  @WorkspaceRelation({
    standardId: TRUCK_STANDARD_FIELD_IDS.shipments,
    type: RelationType.ONE_TO_MANY,
    label: msg`Shipments`,
    description: msg`Shipments assigned to the truck`,
    icon: 'IconPackage',
    inverseSideTarget: () => ShipmentWorkspaceEntity,
    onDelete: RelationOnDeleteAction.SET_NULL,
  })
  @WorkspaceIsNullable()
  shipments: Relation<ShipmentWorkspaceEntity[]>;

  @WorkspaceField({
    standardId: TRUCK_STANDARD_FIELD_IDS.searchVector,
    type: FieldMetadataType.TS_VECTOR,
    label: SEARCH_VECTOR_FIELD.label,
    description: SEARCH_VECTOR_FIELD.description,
    icon: 'IconTruck',
    generatedType: 'STORED',
    asExpression: getTsVectorColumnExpressionFromFields(
      SEARCH_FIELDS_FOR_TRUCK,
    ),
  })
  @WorkspaceIsNullable()
  @WorkspaceIsSystem()
  @WorkspaceFieldIndex({ indexType: IndexType.GIN })
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  searchVector: any;
}
