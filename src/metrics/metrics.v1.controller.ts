import { Body, Controller, Get, Header, Param, Post, Req, UseInterceptors } from "@nestjs/common";
import { MetricsService } from "./metrics.service";
import { MetricsV1Dto } from "./dto/metrics.v1.dto";
import { UpdateSchemaDto } from "./dto/update.schema.dto";
import { SkipThrottle } from "@nestjs/throttler/dist/throttler.decorator";
import { AddUserDetails } from "src/interceptors/addUserDetails.interceptor";
import { GetCombinedData } from "./dto/get.combined.data.dto";
import { EventPattern, Payload } from "@nestjs/microservices";
import { TELEMETRY_QUEUE } from "src/constants";
import { CreateMVDto } from "./dto/mv.dto";

@SkipThrottle()
@Controller('/metrics/v1')
export class MetricsV1Controller {
  constructor(private readonly metricsService: MetricsService) { }

  @Post('save')
  async saveMetrics(
    // @Body(new ParseArrayPipe({ items: MetricsV1Dto })) 
    // metricList: MetricsV1Dto[]
    @Body() metricList: MetricsV1Dto[]
  ) {
    this.metricsService.saveMetrics(metricList);
    return {
      error: false,
      message: 'Started Processing Event'
    }
  }

  @EventPattern(TELEMETRY_QUEUE)
  async handleEvent(@Payload() data: any) {
    console.log('Received data:', data);
  }

  @Post('update-schema')
  @UseInterceptors(AddUserDetails)
  async updateSchema(
    @Body() updateSchemaDto: UpdateSchemaDto
  ) {
    return await this.metricsService.updateSchema(updateSchemaDto);
  }

  @Post('combined-view')
  @UseInterceptors(AddUserDetails)
  async getCombinedView(
    @Body() queryBody: GetCombinedData,
    @Req() reqBody: Request
  ) {
    console.log(queryBody)
    const headers: any = reqBody.headers
    const botId = headers.botid;
    const orgId = headers.orgid;
    return await this.metricsService.combinedView(
      (queryBody as any).userData,
      queryBody.perPage, 
      queryBody.page, 
      botId,
      orgId,
      queryBody.sortBy,
      queryBody.sort?.toUpperCase(),
      queryBody.filter
    )
  }

  @Get('mv/getSchema/:tableName')
  async getMVSchema(@Param('tableName') tableName: string) {
    return await this.metricsService.getTableSchema(tableName);
  }

  @Post('mv/create')
  async createMaterializedView(
    @Body() createMVDto: CreateMVDto,
    @Req() reqBody: Request
  ) {
    const headers: any = reqBody.headers
    const botId = headers.botid;
    const orgId = headers.orgid;
    return await this.metricsService.createMaterializedView(createMVDto.sqlQuery, botId, orgId)
  }

  @Post('mv/getTableData/:tableName')
  async getTableData(
    @Param('tableName') tableName: string,
    @Body() queryBody: GetCombinedData,
    @Req() reqBody: Request
  ) {
    console.log(queryBody)
    const headers: any = reqBody.headers
    const botId = headers.botid;
    const orgId = headers.orgid;
    return await this.metricsService.getTableData(
      tableName,
      queryBody.perPage, 
      queryBody.page, 
      botId,
      orgId,
      queryBody.sortBy,
      queryBody.sort?.toUpperCase(),
      queryBody.filter
    )
  }

  @Get('mv/getTables')
  async listTables(
    @Req() reqBody: Request
  ) {
    const headers: any = reqBody.headers
    const botId = headers.botid;
    return await this.metricsService.listTables(botId);
  }
}