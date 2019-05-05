import { MarsImage } from './../shared/model/mars-image';
import { Component, OnInit } from '@angular/core';
import { NasaApiService } from '../shared/services/nasa-api.service';
@Component({
  selector: 'app-mars',
  templateUrl: './mars.component.html',
  styleUrls: ['./mars.component.css']
})
export class MarsComponent implements OnInit {
  marsPhotos: MarsImage[];
  camaras: string[] = ['FHAZ', 'RHAZ', 'NAVCAM'];
  rovers: string[] = ['Curiosity', 'Opportunity', 'Spirit'];
  noPhotos = false;
  currentCamara: string;
  currentRover: string;
  avatar = 'https://cdn.mos.cms.futurecdn.net/baYs9AuHxx9QXeYBiMvSLU.jpg';

  refreshView = (rover, camera) => {
  this.nasaService.getMarsImgs(rover.toLowerCase(), camera.toLowerCase() ).subscribe( (res) => {
    if (res.photos.lenght !== 0) {
       this.marsPhotos = res.photos;
       this.noPhotos = false;
    } else {
      this.noPhotos = true;
    }
  } );
  }
  constructor( private nasaService: NasaApiService) { }

  ngOnInit() {
    this.currentCamara = this.camaras[0];
    this.currentRover = this.rovers[0];
    this.refreshView(this.currentRover, this.currentCamara);
  }
}
