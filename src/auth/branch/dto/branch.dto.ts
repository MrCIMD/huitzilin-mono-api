import { Field, ObjectType } from '@nestjs/graphql';
import { SortDirection } from '@ptc-org/nestjs-query-core';
import { FilterableField, QueryOptions } from '@ptc-org/nestjs-query-graphql';
import { BaseDto } from 'src/common/dtos/base.dto';

@ObjectType('Branch')
@QueryOptions({ defaultSort: [{ field: 'id', direction: SortDirection.DESC }] })
export class BranchDto extends BaseDto {
  @Field(() => String, { nullable: false })
  picture: string;

  @FilterableField(() => String, { nullable: false })
  name: string;
}
