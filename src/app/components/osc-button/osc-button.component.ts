import { Component, Input, OnInit } from '@angular/core';
import { ResolumeService } from 'src/app/services/resolume.service';


@Component({
  selector: 'app-osc-button',
  templateUrl: './osc-button.component.html',
  styleUrls: ['./osc-button.component.css']
})
export class OscButtonComponent implements OnInit {


  @Input() column:number = 0
  @Input() name:string = 'Default'


  
  
  constructor(private resolume:ResolumeService) {
   }

  ngOnInit(): void {
    
  }

  sendOSC(layer:number){
    console.log('eae')
    this.resolume.playColumn(layer)
  }

}
