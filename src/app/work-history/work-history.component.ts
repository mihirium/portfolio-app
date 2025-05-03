import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import workhistory from '../../assets/info/work-history.json'

@Component({
  selector: 'app-work-history',
  imports: [NgFor],
  templateUrl: './work-history.component.html',
  styleUrl: './work-history.component.css'
})
export class WorkHistoryComponent {
  workHistory = workhistory;

}
