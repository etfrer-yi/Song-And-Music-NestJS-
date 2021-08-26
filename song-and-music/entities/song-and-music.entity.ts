import { Column, Entity, Generated, PrimaryColumn } from 'typeorm';
import { IsOptional, IsUrl, IsUUID, MaxLength } from 'class-validator';

@Entity({ name: 'SongAndMusic' })
export class SongAndMusic {
  @PrimaryColumn('uniqueidentifier', { name: 'Id', default: () => '(NEWID())' })
  @Generated('uuid')
  @IsUUID('4')
  id: string;

  @Column('nvarchar', { name: 'Title', length: 1000 })
  @MaxLength(1000)
  title: string;

  @Column('nvarchar', { name: 'Genre', length: 1000 })
  @MaxLength(1000)
  genre: string;

  @Column('nvarchar', {
    name: 'ArtistGroupOrAnime',
    length: 1000,
    nullable: true,
  })
  @MaxLength(1000)
  @IsOptional()
  artistGroupOrAnime: string | null = null;

  @Column('nvarchar', {
    name: 'EstimatedDiscoveryTime',
    length: 2000,
    nullable: true,
  })
  @MaxLength(2000)
  @IsOptional()
  estimatedDiscoveryTime: string | null = null;

  @Column('nvarchar', { name: 'Link', length: 2000, nullable: true })
  @MaxLength(2000)
  @IsUrl()
  @IsOptional()
  link: string | null = null;
}
