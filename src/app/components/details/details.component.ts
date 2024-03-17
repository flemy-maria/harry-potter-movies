import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../../movie.service';
import { Details } from '../../models/details';
import { TimeFormatPipe } from '../../pipes/time-format.pipe';
import { CurrencyFormatPipe } from '../../pipes/currency-format.pipe';
@Component({
  selector: 'app-details',
  standalone: true,
  imports: [TimeFormatPipe, CurrencyFormatPipe],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  details: Details = {
    id: '',
    title: '',
    duration: '',
    budget: '',
    release_date: '',
    box_office: '',
    cinematographers: '',
    poster: '',
    producers: '',
    summary: ''
  };
  movieId: string = "";
  constructor(private movieService: MovieService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.params.subscribe(param => {
      this.movieId = param['id'];
    })
    this.getMovieDetails()
  }
  getMovieDetails() {
    this.movieService.getMovieDetails(this.movieId).subscribe(
      {
        next: (data) => {
          this.details = data;
        },
        error: (error) => {
          console.log(error)
        },
        complete: () => { }
      }
    )
  }
  navigateToList() {
    this.router.navigate(['/movie-list'])
  }
}
