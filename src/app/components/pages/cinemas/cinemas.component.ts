import { Component } from '@angular/core';
import { ICinema } from 'src/app/interfaces/ICinema';
import { CinemaService } from 'src/app/services/cinema.service';

@Component({
  selector: 'app-cinemas',
  templateUrl: './cinemas.component.html',
  styleUrls: ['./cinemas.component.css']
})
export class CinemasComponent {

  cinemas!: ICinema[];

  //Injecao de dependencia
  constructor(private cinemaDataService: CinemaService){}

  ngOnInit(){this.getAll();}

  getAll() {
    try {
      this.cinemaDataService.getAll().subscribe(
        cinemas => this.cinemas = cinemas,
      );
    } catch (error) {
      console.log(error);
      alert("erro interno do sistema");
    }
  }

  delete(cinema : ICinema){
    try{
      this.cinemas = this.cinemas.filter((a) => cinema.id !== a.id);
      this.cinemaDataService.delete(cinema.id!).subscribe();
    } catch (error) {
      console.log(error);
      alert("erro interno do sistema");
    }
  }
  
}
