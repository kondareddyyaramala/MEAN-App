import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'ellipsis' })
export class EllipsisPipe implements PipeTransform {
  transform(str: string) {
    const withoutHtml = str.replace(/(<([^>]+)>)/ig, '');

    if (str.length >= 250) {
      return withoutHtml.slice(0, 250) + '...';
    }

    return withoutHtml;
  }
}
