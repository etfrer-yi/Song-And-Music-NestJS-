import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { SongAndMusic } from './entities/song-and-music.entity';
import { SongAndMusicService } from './song-and-music.service';

@Controller('song-and-music')
export class SongAndMusicController {
  constructor(private readonly songAndMusicService: SongAndMusicService) {}

  @Get()
  async findAll() {
    return await this.songAndMusicService.findAll();
  }

  @Put()
  async save(@Body() songAndMusic: SongAndMusic) {
    return await this.songAndMusicService.save(songAndMusic);
  }

  @Delete(':id')
  async delete(@Param('id') id) {
    return await this.songAndMusicService.delete(id);
  }

  @Post()
  async insert(@Body() songAndMusic: SongAndMusic) {
    return await this.songAndMusicService.insert(songAndMusic);
  }
}
