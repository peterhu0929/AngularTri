import { Pipe, PipeTransform } from '@angular/core';
export enum PipeParm {
  CompileStatus = 'CompileStatus',
  CompilePGType = 'CompilePGType',
  YN2Boolean = 'YN2Boolean',
  EventStatus = 'EventStatus'
}
@Pipe({
  name: 'code2name'
})
export class Code2namePipe implements PipeTransform {

  transform(code: any, exponent: string): any {

    let name: any;
    if (exponent === PipeParm.CompileStatus) {
      if (code === -100) {
        name = '編譯失敗';
      } else if (code === 900) {
        name = '編譯成功';
      } else if (code === 1000) {
        name = '已佈署';
      } else if (code === 0) {
        name = '全部';
      }
    }
    if (exponent === PipeParm.CompilePGType) {
      if (code === 'T') {
        name = '.ts';
      } else if (code === 'H') {
        name = '.html';
      } else if (code === 'S') {
        name = '.scss';
      } else if (code === 'ALL') {
        name = '全部';
      }
    }
    if (exponent === PipeParm.EventStatus) {
      if (code === '-100') {
        name = '報名已截止';
      } else if (code === '0') {
        name = '尚未開始報名';
      } else if (code === '100') {
        name = '報名中';
      }
    }
    return name;
  }

}
