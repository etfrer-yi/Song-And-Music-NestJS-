import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SongAndMusic } from './entities/song-and-music.entity';

@Injectable()
export class SongAndMusicService {
  constructor(
    @InjectRepository(SongAndMusic)
    private songAndMusic: Repository<SongAndMusic>,
  ) {}

  async findAll() {
    return await this.songAndMusic.find();
  }

  async save(songAndMusic: SongAndMusic) {
    return await this.songAndMusic.save(songAndMusic);
  }

  async delete(id) {
    return await this.songAndMusic.delete(id);
  }

  async insert(songAndMusic) {
    return await this.songAndMusic.insert(songAndMusic);
  }
}
