import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDto } from './create-song.dto';
import { UpdateSongDto } from './update-song.dto';

@Controller('songs')
export class SongsController {
  constructor(private readonly songsService: SongsService) {}

  @Post()
  create(createSongDto: CreateSongDto) {
    return this.songsService.create(createSongDto);
  }

  @Get()
  findAll() {
    return this.songsService.findAll();
  }

  @Get('title/:title')
  findByTitle(@Param('title') title: string) {
    return this.songsService.findByTitle(title);
  }

  @Get('artist/:artist')
  findByArtist(@Param('artist') artist: string) {
    return this.songsService.findByArtist(artist);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.songsService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateSongDto: UpdateSongDto) {
    return this.songsService.update(+id, updateSongDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.songsService.remove(+id);
  }
}