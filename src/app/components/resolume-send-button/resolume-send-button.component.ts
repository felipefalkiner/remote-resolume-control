import { Component, Input, OnInit } from '@angular/core';
import { ResolumeService } from 'src/app/services/resolume.service';


@Component({
  selector: 'app-resolume-send-button',
  templateUrl: './resolume-send-button.component.html',
  styleUrls: ['./resolume-send-button.component.css']
})
export class OscButtonComponent implements OnInit {


  @Input() column:number = 0
  @Input() name:string = 'Default'
  @Input() image:string = ''
    
  constructor(private resolume:ResolumeService) {
   }

  ngOnInit(): void {
    // console.log(os.hostname)
  }

  sendOSC(layer:number){
    console.log('eae')
    this.resolume.playColumn(layer)
  }

}
