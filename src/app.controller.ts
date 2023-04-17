import {
  Controller,
  Get,
  Post,
  Request,
  Render,
  Res,
  Body,
  UploadedFile,
  UseInterceptors,
  Param,
  UseGuards, UseFilters
} from "@nestjs/common";
import { AppService } from './app.service';
import { Response } from 'express';
import { FileInterceptor } from '@nestjs/platform-express';
import { TransformationInterceptor } from './timer.interceptor';
import { AuthGuard } from './auth/auth.guard';
import { Session } from './auth/session.decorator';
import { SessionContainer } from 'supertokens-node/recipe/session';
// import { AuthAutorizedFilter } from "./auth/authAutorized.filter";
// import { TimerInterceptor } from './timer.interceptor';

@UseInterceptors(TransformationInterceptor)
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('test')
  @UseGuards(new AuthGuard())
  async getTest(@Session() session: SessionContainer): Promise<string> {
    // TODO: magic
    session.getAccessToken();
    return 'magic';
  }

  @Get()
  @UseGuards(new AuthGuard())
  @Render('index')
  root() {
    return {};
  }

  @Get('/ask')
  @Render('askNotLogin')
  getAsk() {
    return;
  }
  @Get('/loginss')
  @Render('loginAuth')
  getAskss() {
    return;
  }

  @Post('/login')
  login(@Res() res: Response, @Request() req) {
    console.log(req.body.pass);
    res.redirect(`/home/${req.body.pass}`);
  }

  // login(@Res() res: Response, @Request() req) {
  //   res.redirect('/home');
  // }

  @Get('/home/:username')
  @Render('ask')
  getHome(@Param() params) {
    return { user: params.username };
  }

  // @Get('/home')
  // @Render('ask')
  // getHome(@Body() body) {
  //   console.log(body);
  // }
  // getHome(@Request() req) {
  //   return { user: req.body.};
  // }

  @Get('/friends')
  @Render('friends')
  getFriends() {
    return {};
  }

  // @Get('/meet')
  // @Render('meet')
  // getMeet() {
  //   return {};
  // }

  @Get('/skills')
  @Render('skills')
  getSkills() {
    return {};
  }
}
