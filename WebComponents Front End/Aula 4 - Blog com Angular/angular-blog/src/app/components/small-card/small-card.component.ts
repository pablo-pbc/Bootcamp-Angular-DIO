import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css', './small-card.responsive.component.css']
})
export class SmallCardComponent implements OnInit {
  @Input()
  photoCover:string = ""
  @Input()
  photoAlt:string = ""
  @Input()
  photoAuthor:string = ""
  @Input()
  cardTitle:string = ""
  @Input()
  cardLink:string = ""
  @Input()
  Id:string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
