import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { LoaderService } from 'src/app-core/services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoaderComponent implements OnInit {

  isloading: Subject<boolean> = this._loaderService.isLoading;

  constructor(
    private _loaderService: LoaderService
  ) { }

  ngOnInit(): void {
  }

}
