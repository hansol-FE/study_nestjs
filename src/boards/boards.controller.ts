import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Board } from './board.model';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-bord.dto';

@Controller('boards')
export class BoardsController {
  /*  접근 제한자(public, protected,private)을 생성자(constructor) 파라미터에 선언하면,
    접근 제한자가 사용된 파라미터는 암묵적으로 클래스 프로퍼티로 선언된다.

    기존 프로퍼티 사용 예시)
    boardsService: BoardsService;

    constructor(boardsService:BoardsService) {
        this.boardsService = boardsService;
    }
 */
  constructor(private boardsService: BoardsService) {}

  @Get()
  getAllBoard(): Board[] {
    return this.boardsService.getAllBoards();
  }

  @Post()
  createBoard(@Body() CreateBoardDto: CreateBoardDto): Board {
    return this.boardsService.createBoard(CreateBoardDto);
  }

  @Get('/:id')
  getBoardById(@Param('id') id: string): Board {
    return this.boardsService.getBoardById(id);
  }

  @Delete('/:id')
  deleteBoardById(@Param('id') id: string): void {
    return this.boardsService.deleteBoardById(id);
  }
}
