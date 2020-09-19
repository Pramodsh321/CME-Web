import { Component, OnInit } from '@angular/core';
import { ResolutionService } from '../resolution.service'
@Component({
  selector: 'app-resolution-types',
  templateUrl: './resolution-types.component.html',
  styleUrls: ['./resolution-types.component.css']
})
export class ResolutionTypesComponent implements OnInit {

  constructor(private resolutionService: ResolutionService) { }
  resolutionTypes: any;
  ngOnInit(): void {
    this.resolutionService.getResolutionTypes().subscribe(
      response => {
        this.resolutionTypes=response;
      }

    );

  }

}
