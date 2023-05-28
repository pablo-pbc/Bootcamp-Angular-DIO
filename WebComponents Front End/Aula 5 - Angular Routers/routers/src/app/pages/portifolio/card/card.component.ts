import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(
    private activeRoute: ActivatedRoute,
    private navigate: Router
    ) {

    // http://localhost:4200/portifolio/{ID}
    this.activeRoute.params.subscribe(
      res => console.log(res)
    )

    // http://localhost:4200/portifolio/{ID} :: for child routers
    this.activeRoute.firstChild?.params.subscribe(
      res => console.log(res)
    )

    // http://localhost:4200/portifolio/{ID}?{name=pablo&token=123}
    this.activeRoute.queryParams.subscribe(
      res => console.log(res)
    )
  }

  ngOnInit(): void {
    // setInterval(() => {
    //   this.navigate.navigate(['/'])
    // }, 2000)
  }
}
