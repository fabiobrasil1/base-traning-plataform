import { EnrolledController } from './controllers/enrolled.controller';


import { Module } from '@nestjs/common';

@Module({
    imports: [],
    controllers: [
        EnrolledController,],
    providers: [],
})
export class EnrolledModule { }
