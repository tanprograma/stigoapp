import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { View } from 'src/app/types';
import { ViewService } from 'src/app/services/view.service';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-appheader',
  templateUrl: './appheader.component.html',
  styleUrls: ['./appheader.component.css'],
})
export class AppheaderComponent implements OnInit {
  @Input() heading!: View;
  faArrowLeft = faArrowLeft;
  constructor(public viewService: ViewService) {}

  ngOnInit(): void {}
}
