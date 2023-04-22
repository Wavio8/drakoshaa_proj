import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';

export interface Response {
  data: string;
}

@Injectable()
export class TransformationInterceptor<T>
  implements NestInterceptor<T, Response>
{
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<Response> {
    const startTime = Date.now();
    return next.handle().pipe(
      map((data) => ({
        data: ` + ${Number(Date.now() - startTime) / 1000} s (server)`,
        hello: data && data.hello ? data.hello : '',
      })),
    );
  }
}
