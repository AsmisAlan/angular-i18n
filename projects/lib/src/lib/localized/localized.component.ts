import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-localized',
  templateUrl: './localized.component.html',
  styleUrls: ['./localized.component.css']
})
export class LocalizedComponent implements OnInit {

  public title = $localize`:@@welcome:`;

  constructor() { }

  ngOnInit(): void {
  }

}
