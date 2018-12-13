import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { WaterEG } from '../waterEG.model';
import { WaterEGService } from '../waterEG.service';

@Component({
  selector: 'app-waterEG-list',
  templateUrl: './waterEG-list.component.html',
  styleUrls: ['./waterEG-list.component.css']
})
export class WaterEGListComponent implements OnInit {

  @Output() waterEGWasSelected = new EventEmitter<WaterEG>();
  waterEGs:WaterEG[];
  

  constructor(private waterEGService:WaterEGService) { }

  ngOnInit() {
    this.waterEGs = this.waterEGService.getWaterEGs();
  }

  onWaterEGSelected(waterEG:WaterEG){
    this.waterEGWasSelected.emit(waterEG);
  }

}
