import { Pipe, PipeTransform } from '@angular/core';
import { List } from '../models/list';

@Pipe({
  name: 'releaseDateFilter',
  standalone: true
})
export class ReleaseDateFilterPipe implements PipeTransform {

  transform(movies: List[], titleQuery: string): List[] {
    if (!titleQuery || titleQuery === '') {
      return movies;
    }
    titleQuery = titleQuery.toLowerCase();
    return movies.filter(movie => movie.release_date.toLowerCase().includes(titleQuery));
  }

}
