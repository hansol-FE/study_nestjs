import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Board, BoardStatus } from './board.model';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-bord.dto';
import { BoardStatusValidationPipe } from './pipes/board-status-validation.pipe';

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

  /* 
    [Handler-level Pipes]
    핸들러 레벨에서 @UsePipes() 데코레이터를 이용해서 사용 할 수 있다.
    이 파이프는 모든 파라미터에 적용된다.

    [Built-in Pipes]
    Nest JS에 기본적으로 사용할 수 있게 만들어 놓은 6가지 파이프가 있다.
    1. ValidationPipe
    2. ParseIntPipe
    3. ParseBoolPipe
    4. ParseArrayPipe
    5. ParseUUIDPipe
    6. DefaultValuePipe
  */
  @Post()
  @UsePipes(ValidationPipe)
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

  @Patch('/:id/status')
  updateBoardStatus(
    @Param('id') id: string,
    @Body('status', BoardStatusValidationPipe) status: BoardStatus,
  ): Board {
    return this.boardsService.updateBoardStatus(id, status);
  }
}
