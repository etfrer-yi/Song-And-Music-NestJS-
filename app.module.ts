import { Module } from '@nestjs/common';
import { SongAndMusicModule } from './song-and-music/song-and-music.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SongAndMusic } from './song-and-music/entities/song-and-music.entity';

@Module({
  imports: [
    SongAndMusicModule,
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'localhost',
      port: 1433,
      username: 'sa',
      password: 'sa1234',
      database: 'SongAndMusic',
      synchronize: true,
      entities: [SongAndMusic],
      options: { encrypt: false },
    }),
  ],
})
export class AppModule {}
