import { Args, ID, Mutation, Resolver } from '@nestjs/graphql';
import { BranchService } from './branch.service';
import { BranchDto } from './dto/branch.dto';
import { Filter, UpdateManyResponse } from '@ptc-org/nestjs-query-core';
import {
  FilterType,
  UpdateManyResponseType,
} from '@ptc-org/nestjs-query-graphql';

@Resolver(() => BranchDto)
export class BranchResolver {
  constructor(private readonly branchService: BranchService) {}

  @Mutation(() => BranchDto)
  restoreOneVideo(
    @Args('input', { type: () => ID }) id: number,
  ): Promise<BranchDto> {
    return this.branchService.restoreOne(id);
  }

  @Mutation(() => UpdateManyResponseType())
  restoreManyVideos(
    @Args('input', { type: () => FilterType(BranchDto) })
    filter: Filter<BranchDto>,
  ): Promise<UpdateManyResponse> {
    return this.branchService.restoreMany(filter);
  }
}
