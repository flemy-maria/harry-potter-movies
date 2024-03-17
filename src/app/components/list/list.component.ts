import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../movie.service';
import { List } from '../../models/list';
import { CommonModule, DatePipe } from '@angular/common';
import { Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TimeFormatPipe } from '../../pipes/time-format.pipe';
import { CurrencyFormatPipe } from '../../pipes/currency-format.pipe';
import { TitleFilterPipe } from '../../pipes/title-filter.pipe';
import { ReleaseDateFilterPipe } from '../../pipes/release-date-filter.pipe';
@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, TitleFilterPipe, ReleaseDateFilterPipe, TimeFormatPipe, CurrencyFormatPipe],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {
  list: List[] = [];
  searchInputTitle: string = "";
  searchInputYear: string = "";
  constructor(private moviesService: MovieService, private router: Router) { }
  ngOnInit(): void {
    this.getMovies();
  }
  getMovies() {
    this.moviesService.getMovieList().subscribe(
      {
        next: (data) => {
          this.list = data;
        },
        error: (error) => {
          console.log(error)
        },
        complete: () => { }
      }
    )
  }
  navigateToDetails(event: Event, id: string) {
    console.log((event.target as HTMLInputElement).id)
    this.router.navigate(['/movie-detail', id])
  }
}
