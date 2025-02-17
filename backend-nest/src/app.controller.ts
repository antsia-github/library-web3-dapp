import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { MintBookDTO } from './dtos/mintBook.dto';
import { SetUserDTO } from './dtos/setUser.dto';
import { RentDTO } from './dtos/rent.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post("mint-book")
  async mintBook(@Body() body: MintBookDTO): Promise<any> {
    console.log({ body });
    return await this.appService.mintBook(body.URI, body.metadata, body.expires, body.receipt_);
  }

  @Post("set-user")
  async setUser(@Body() body: SetUserDTO): Promise<any> {
    console.log({ body });
    return await this.appService.setUser(body.tokenID, body.user, body.expires, body.receipt_);
  }

  @Post("rent")
  async rent(@Body() body: RentDTO): Promise<any> {
    return this.appService.rent(body.URI, body.metadata, body.expires);
  }

  @Get("user-of")
  async userOf(): Promise<any> {
    return await this.appService.userOf();
  }
}
