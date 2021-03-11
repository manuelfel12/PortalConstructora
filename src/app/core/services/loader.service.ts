import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  display(value: boolean) {
    if (value) {
      $('.loader,.screen-lock').show();
    }
    else {
      $('.loader,.screen-lock').hide();
    }
  }

  autoLoader(value: boolean) {
    if (value) {
      $('.loader-sm').show();
    }
    else {
      $('.loader-sm').hide();
    }
  }

}
