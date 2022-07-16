import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
interface company{
  value : string;
  viewValue : string;
}

@Component({
  selector: 'app-designer-jobs',
  templateUrl: './designer-jobs.component.html',
  styleUrls: ['./designer-jobs.component.css']
})


export class DesignerJobsComponent implements OnInit{

  selectedValue: string | undefined;
  selectedCar: string | undefined;

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
  }

  companies : company[] = [
    {value : 'TCS-0', viewValue : 'TCS'},
    {value : 'Cognizant-1', viewValue : 'Cognizant'},
    {value : 'Infobeans-2', viewValue : 'Infobeans'}
  ];

  profiles = this.formBuilder.group({
    graphicsDesigner : false,
    uiUxDesigner : false,
    threeDAnimators : false,
    gameDesigner : false,
    sketchArtist : false,
    vedioEditors : false,
    vectorDesigner : false
  })

  jobs = [1, 2, 3, 4, 5];
  
  


}
