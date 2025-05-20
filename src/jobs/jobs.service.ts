import { Injectable } from '@nestjs/common';

@Injectable()
export class JobsService {

    constructor() {}

    createJob(){

        return 'Job created';
    }
}
