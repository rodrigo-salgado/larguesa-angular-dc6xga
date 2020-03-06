import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { albuns } from '../albuns'

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnInit {
  private id: String;
  private album: Object;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.album = albuns[this.id];
    });
  }

}