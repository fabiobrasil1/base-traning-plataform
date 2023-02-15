import { ClassesController } from './controllers/classes.controller';


import { Module } from '@nestjs/common';

@Module({
    imports: [],
    controllers: [
        ClassesController,],
    providers: [],
})
export class ClassesModule { }
