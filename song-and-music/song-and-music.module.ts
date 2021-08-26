import { Module } from '@nestjs/common';
import { SongAndMusicService } from './song-and-music.service';
import { SongAndMusicController } from './song-and-music.controller';
import { SongAndMusic } from './entities/song-and-music.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [SongAndMusicController],
  providers: [SongAndMusicService],
  imports: [TypeOrmModule.forFeature([SongAndMusic])],
})
export class SongAndMusicModule {}
