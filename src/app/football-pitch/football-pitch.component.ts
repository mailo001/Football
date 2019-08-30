import { Component, OnInit } from '@angular/core';
import { Pitch, DOTS_SPACE } from '../models/pitch';
import { FootballPitchService } from '../services/football-pitch.service';
import { Dot } from '../models/dot';
import { LineType } from '../models/line-type';

@Component({
  selector: 'app-football-pitch',
  templateUrl: './football-pitch.component.html',
  styleUrls: ['./football-pitch.component.scss']
})
export class FootballPitchComponent implements OnInit {

  pitch: Pitch;
  dotsSpace = DOTS_SPACE;

  width: number;
  height: number;
  viewBox: string;

  constructor(
    private footballPittchService: FootballPitchService
  ) { }

  ngOnInit() {
    this.footballPittchService.initPitch(10, 15);
    this.footballPittchService.getPitchObs().subscribe(pitch => this.pitch = pitch);

    this.width = (this.pitch.nbDotsWidth - 1) * this.dotsSpace;
    this.height = (this.pitch.nbDotsHeight - 1) * this.dotsSpace;
    this.viewBox = '0 0 ' + this.width.toString() + ' ' + this.height.toString();
  }

  dotClick(dot: Dot) {
    this.footballPittchService.changeAvalible(dot);
  }

}
