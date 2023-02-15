import { User_systemController } from './controllers/user_system.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';

@Module({
    imports: [],
    controllers: [
        User_systemController,],
    providers: [],
})
export class User_systemModule { }
