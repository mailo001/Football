import { Injectable } from '@angular/core';
import { Pitch } from '../models/pitch';
import { BehaviorSubject, Observable } from 'rxjs';
import { Dot } from '../models/dot';

@Injectable({
  providedIn: 'root'
})
export class FootballPitchService {

  pitch = new Pitch();

  pitchObs = new BehaviorSubject<Pitch>(this.pitch);

  constructor() { }

  getPitchObs(): Observable<Pitch> {
    return this.pitchObs.asObservable();
  }

  initPitch(nbDotsWidth: number, nbDotsHeight: number) {
    this.pitch.init(nbDotsWidth, nbDotsHeight);
    this.pitchObs.next(this.pitch);
  }

  changeAvalible(dot: Dot) {
    if (dot.available) {
      this.pitch.dots[dot.x * this.pitch.nbDotsHeight + dot.y].available = false;
    } else {
      this.pitch.dots[dot.x * this.pitch.nbDotsHeight + dot.y].available = true;
    }
    this.pitchObs.next(this.pitch);
  }


}
