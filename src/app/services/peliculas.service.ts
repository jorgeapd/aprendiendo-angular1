import { Injectable } from '@angular/core';
import { Pelicula } from '../models/pelicula';

@Injectable()
export class PeliculaService{

    public peliculas: Pelicula[];

    constructor(){
        this.peliculas = [
            new Pelicula ("Spiderman 3", 2007, "https://sm.ign.com/ign_latam/movie/s/spider-man/spider-man-3_qahe.jpg"),
            new Pelicula ("Batman vs Superman", 2020, "https://m.media-amazon.com/images/S/pv-target-images/e261a3a930733e9435a6304d7d6a8e89ddfe5efc65a7a29b8659544eb15fadb6.jpg"),
            new Pelicula ("Ironman ", 2008, "https://es.web.img3.acsta.net/medias/nmedia/18/66/64/01/20168724.jpg"),
          ];        
    }

    holaMundo(){
        return 'Hola Mundo desde el servicio de Angular';
    }

    getPeliculas(){
        return this.peliculas;
    }
}