import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor() { }
  loading = signal(false);

  showLoader = () => this.loading.set(true);

  hideLoader = () => this.loading.set(false);
}
