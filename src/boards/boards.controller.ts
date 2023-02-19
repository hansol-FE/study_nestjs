import { Controller } from '@nestjs/common';
import { BoardsService } from './boards.service';

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
  constructor(private boardService: BoardsService) {}
}
