import { Injectable } from '@nestjs/common';
import { Board } from '../../dist/boards/boards.model.d';

@Injectable()
export class BoardsService {
  private boards: Board[] = [];

  getAllBoards(): Board[] {
    return this.boards;
  }
}
