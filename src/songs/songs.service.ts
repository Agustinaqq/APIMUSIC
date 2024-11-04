import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSongDto } from './create-song.dto';
import { UpdateSongDto } from './update-song.dto';
import { Song } from './interface'; // Importa la interfaz Song

@Injectable()
export class SongsService {
  private songs: Song[] = [];
  private idCounter = 1;

  create(createSongDto: CreateSongDto): Song {
    const newSong: Song = { id: this.idCounter++, ...createSongDto };
    this.songs.push(newSong);
    return newSong;
  }

  findAll(): Song[] {
    return this.songs;
  }

  findOne(id: number): Song {
    const song = this.songs.find(song => song.id === id);
    if (!song) throw new NotFoundException('Song not found');
    return song;
  }

  findByTitle(title: string): Song[] {
    return this.songs.filter(song => song.title === title);
  }

  findByArtist(artist: string): Song[] {
    return this.songs.filter(song => song.artist === artist);
  }

  update(id: number, updateSongDto: UpdateSongDto): Song {
    const song = this.findOne(id);
    Object.assign(song, updateSongDto);
    return song;
  }

  remove(id: number): void {
    const index = this.songs.findIndex(song => song.id === id);
    if (index === -1) throw new NotFoundException('Song not found');
    this.songs.splice(index, 1);
  }
}