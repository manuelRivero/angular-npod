import { MarsImage } from './../model/mars-image';
import { HttpClient } from '@angular/common/http';
import { Apod } from './../model/apod';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NasaApiService {
  apiKey = 'PN8WhehmisnNXjJ7MmbhIzzIAzndUz4qI6cLPI4i';
  marsUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers`;
  apodUrl = `https://api.nasa.gov/planetary/apod?api_key=${this.apiKey}`;
  private readonly DATA: Apod = {
    date: '2019-04-19',
    explanation: 'A postcard from planet Earth, this springtime night skyscape looks over Alandan lake in the Alborz mountains. Taken after local midnight on April 17, the central Milky Way is rising over the regions southeast horizon. Its luminous track of stars and nebulae along the plane of our galaxy are reflected in the mirror-like lake.  The brightest celestial beacon mingled with the diffuse galactic starlight is Jupiter. Slightly dimmer, Saturn is below and left just above the mountains. As spring brought leaves to the trees and the galactic center to the northern night the photographer found it also gave frogs their voices, heard like a melody across the calm water.',
    hdurl: 'https://apod.nasa.gov/apod/image/1904/TahaIMG_1142-1.jpg',
    media_type: 'image',
    service_version: 'v1',
    title: 'Milky Way in Northern Spring',
    url: 'https://apod.nasa.gov/apod/image/1904/TahaIMG_1142-1_800w.jpg'
    };
  constructor(private http: HttpClient) { }

  getApod = () => {
    return this.http.get<Apod>(this.apodUrl);
  }

  getMarsImgs = (rover, camera) => {
    return this.http.get(`${this.marsUrl}/${rover}/photos?sol=1000&camera=${camera}&api_key=${this.apiKey}`);
  }
}
