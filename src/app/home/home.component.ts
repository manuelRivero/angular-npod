import { NasaApiService } from './../shared/services/nasa-api.service';
import { Component, OnInit } from '@angular/core';
import { Apod } from './../shared/model/apod';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  apiKey = 'PN8WhehmisnNXjJ7MmbhIzzIAzndUz4qI6cLPI4i';
  nasaLogo = 'https://i.pinimg.com/originals/49/02/f0/4902f0bdd3d316690cb70bcc68236db6.jpg';
  nasaLogoAlternative = 'https://api.nasa.gov/images/logo.png';
  apod: Apod;
  fecha = "2019-04-21T04:00:00.000Z";
  constructor( private nasaApi: NasaApiService) { }

  ngOnInit() {
    this.nasaApi.getApod().subscribe( (res: Apod ) => {
      this.apod = res;
    });
   }

}
