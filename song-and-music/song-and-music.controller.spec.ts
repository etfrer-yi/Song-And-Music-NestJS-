import { Test, TestingModule } from '@nestjs/testing';
import { SongAndMusicController } from './song-and-music.controller';
import { SongAndMusicService } from './song-and-music.service';

// https://stackoverflow.com/questions/67524766/nestjs-unit-testing-for-controller-mocking-the-delete-from-service-not-working for unit testing the controller

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

const mockService = {
  findAll: jest.fn(),
  save: jest.fn(),
  delete: jest.fn(),
  insert: jest.fn(),
};

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

describe('SongAndMusicController', () => {
  let controller: SongAndMusicController;
  let service: SongAndMusicService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SongAndMusicController],
      providers: [SongAndMusicService],
    })
      .overrideProvider(SongAndMusicService)
      .useValue(mockService)
      .compile();

    controller = module.get<SongAndMusicController>(SongAndMusicController);
    service = module.get<SongAndMusicService>(SongAndMusicService);
  });

  it('controller should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('controller should call findAll of service', async () => {
    mockService.findAll.mockResolvedValue(mockSongAndMusicArray);
    expect(await controller.findAll()).toBe(mockSongAndMusicArray);
  });

  it('controller should call save of service', async () => {
    mockService.save.mockResolvedValue(mockSongAndMusicArray);
    expect(await controller.save(mockSongAndMusic)).toBe(mockSongAndMusicArray);
    expect(service.save).toBeCalledWith(mockSongAndMusic);
  });

  it('controller should call delete of service', async () => {
    mockService.delete.mockResolvedValue({ raw: null, affected: 0 });
    expect(await controller.delete(mockId)).toStrictEqual({
      raw: null,
      affected: 0,
    });
    expect(service.delete).toBeCalledWith(mockId);
  });

  it('controller should call insert of service', async () => {
    mockService.insert.mockResolvedValue(mockInsertResponse);
    expect(await controller.insert(mockSongAndMusic)).toEqual(
      mockInsertResponse,
    );
    expect(service.insert).toBeCalledWith(mockSongAndMusic);
  });
});
