import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/services/loading/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css'],
})
export class LoadingComponent implements OnInit {
  loading: boolean | undefined;

  constructor(private service: LoadingService) {
    this.service.isLoading.subscribe((v) => {
      this.loading = v;
    });
  }

  ngOnInit(): void {}
}
