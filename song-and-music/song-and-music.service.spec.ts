import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SongAndMusic } from './entities/song-and-music.entity';
import { SongAndMusicService } from './song-and-music.service';

// https://stackoverflow.com/questions/55366037/inject-typeorm-repository-into-nestjs-service-for-mock-data-testing/55366343#55366343 for unit testing service

const mockId = '668953bb-3b90-4f0f-a8b2-c8724da84c5a';

const mockSongAndMusic = {
  id: '668953bb-3b90-4f0f-a8b2-c8724da84c5a',
  title: 'Crossing Field',
  genre: 'Anime',
  artistGroupOrAnime: 'LiSa',
  estimatedDiscoveryTime: '2021-07-11',
  link: 'https://www.youtube.com/watch?v=KId6eunoiWk&list=RDKId6eunoiWk&start_radio=1&ab_channel=lxixsxaVEVO',
};

const mockSongAndMusicArray = [mockSongAndMusic];

const mockInsertResponse = {
  identifiers: [
    {
      id: '668953bb-3b90-4f0f-a8b2-c8724da84c5a',
    },
  ],
  generatedMaps: [
    {
      id: '668953bb-3b90-4f0f-a8b2-c8724da84c5a',
    },
  ],
  raw: [
    {
      Id: '668953bb-3b90-4f0f-a8b2-c8724da84c5a',
    },
  ],
};

export type MockType<T> = {
  [P in keyof T]?: jest.Mock<{}>;
};

const mockMySongAndMusic = {
  find: jest.fn(),
  save: jest.fn(),
  delete: jest.fn(),
  insert: jest.fn(),
};

describe('SongAndMusicService', () => {
  let service: SongAndMusicService;
  let mockRepository: MockType<Repository<SongAndMusic>>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SongAndMusicService,
        {
          provide: getRepositoryToken(SongAndMusic),
          useValue: mockMySongAndMusic,
        },
      ],
    }).compile();

    service = module.get<SongAndMusicService>(SongAndMusicService);
    mockRepository = module.get(getRepositoryToken(SongAndMusic));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should call the repository with findAll', async () => {
    mockRepository.find.mockReturnValue(mockSongAndMusicArray);
    expect(await service.findAll()).toEqual(mockSongAndMusicArray);
  });

  it('should call the repository with save', async () => {
    mockRepository.save.mockReturnValue(mockSongAndMusic);
    expect(await service.save(mockSongAndMusic)).toEqual(mockSongAndMusic);
    expect(mockRepository.save).toHaveBeenCalledWith(mockSongAndMusic);
  });

  it('should call the repository with delete', async () => {
    mockRepository.delete.mockReturnValue({ raw: null, affected: 0 });
    expect(await service.delete(mockId)).toEqual({ raw: null, affected: 0 });
    expect(mockRepository.delete).toBeCalledWith(mockId);
  });

  it('should call the repository with insert', async () => {
    mockRepository.insert.mockReturnValue(mockInsertResponse);
    expect(await service.insert(mockSongAndMusic)).toEqual(mockInsertResponse);
    expect(mockRepository.insert).toBeCalledWith(mockSongAndMusic);
  });
});
