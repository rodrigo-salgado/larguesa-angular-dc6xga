import { Component, OnInit } from '@angular/core';

import { albuns } from '../albuns.ts'

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {
  public albuns = albuns;
  
  constructor() { }

  ngOnInit() {
  }

}