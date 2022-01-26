import { ConfigService } from './config.service';
import { Module } from '@nestjs/common';

@Module({
    providers: [
        {
            provide: ConfigService,
            useValue: new ConfigService()
        },
    ],
})
export class ConfigModule {}
