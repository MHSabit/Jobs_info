import { Body, Controller, Post } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { CreateJobDto } from './dtos/createJob.dto';

@Controller('jobs')
export class JobsController {
    constructor(
        private readonly jobsService: JobsService,
    ) {}

    @Post()
    createJob(@Body() jobData: CreateJobDto) {
        console.log(jobData);
        return this.jobsService.createJob();
    }
}
