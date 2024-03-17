import { Pipe, PipeTransform } from '@angular/core';
import { List } from '../models/list';

@Pipe({
  name: 'titleFilter',
  standalone: true
})
export class TitleFilterPipe implements PipeTransform {

  transform(movies: List[], titleQuery: string): List[] {
    if (!titleQuery || titleQuery === '') {
      return movies;
    }
    titleQuery = titleQuery.toLowerCase();
    return movies.filter(movie => movie.title.toLowerCase().includes(titleQuery));
  }

}
