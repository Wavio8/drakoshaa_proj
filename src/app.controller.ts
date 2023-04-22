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
  UseGuards,
  UseFilters,
  Req,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';
import { FileInterceptor } from '@nestjs/platform-express';
import { TransformationInterceptor } from './timer.interceptor';
import { AuthGuard } from './auth/auth.guard';
import { Session } from './auth/session.decorator';
import { getSession, SessionContainer } from 'supertokens-node/recipe/session';
import { signIn } from 'supertokens-node/lib/build/recipe/emailpassword';
import { getCookieValue } from 'supertokens-auth-react/lib/build/utils';
import { ApiBasicAuth } from '@nestjs/swagger';
// import { AuthAutorizedFilter } from "./auth/authAutorized.filter";
// import { TimerInterceptor } from './timer.interceptor';

@UseInterceptors(TransformationInterceptor)
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiBasicAuth()
  @Get('test')
  @UseGuards(new AuthGuard())
  async getTest(@Session() session: SessionContainer): Promise<string> {
    // TODO: magic
    // session.getAccessToken();
    return 'magic';
  }

  @Get('/login')
  @Render('askNotLogin')
  async getTwo() {
    // TODO: magic
    // session.getAccessToken();
    return {};
  }

  @Get()
  @Render('index')
  async root(
    @Session() session: SessionContainer,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    // console.log(req.headers.get(getCookieValue()));
    try {
      const uu = await getSession(req, res);
      if (uu.getAccessToken()) {
        console.log(uu.getUserId());
      }
    } catch (error) {
      console.log('Ошибка:');
    }
    return {};
  }

  @ApiBasicAuth()
  @Get('/ask/protect')
  @UseGuards(new AuthGuard())
  @Render('ask')
  getAskProtect(@Session() session: SessionContainer) {
    // console.log(session.getAccessToken());
    // console.log(session.getUserId());
    // console.log(session.getUserId().toString());
    //
    // const user = {
    //   message: session.getUserId().toString(),
    // };
    return { hello: session.getUserId().toString() };
  }
  @Get('/ask')
  async getAsk(
    @Session() session: SessionContainer,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    try {
      const sess = await getSession(req, res);
      if (sess.getAccessToken()) {
        res.redirect('/ask/protect');
      }
    } catch (error) {
      res.redirect('/login');
    }
    return;
  }

  // @Post('/login')
  // login(@Res() res: Response, @Request() req) {
  //   console.log(req.body.pass);
  //   res.redirect(`/home/${req.body.pass}`);
  // }lab3

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
