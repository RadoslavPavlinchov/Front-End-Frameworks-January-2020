import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CausesService } from '../causes.service';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.css']
})
export class RightComponent implements OnInit {

  @ViewChild('amountInput', { static: false }) amountInput: ElementRef<HTMLInputElement>

  get color() {
    if (this.selectedCause.collectedAmount >= this.selectedCause.neededAmount) {
      return 'green';
    }
    if (this.selectedCause.collectedAmount < 2 * (this.selectedCause.neededAmount / 3) &&
        this.selectedCause.collectedAmount > (this.selectedCause.neededAmount / 3)) {
      return 'yellow';
    }
    return 'red';
  }

  get selectedCause() { return this.causesService.selectedCause }

  constructor(private causesService: CausesService) { }

  ngOnInit() {
  }

  makeDonationHandler() {
    this.causesService.donate(+this.amountInput.nativeElement.value).subscribe(() => {
      this.causesService.loadCauses();
      this.amountInput.nativeElement.value = '';
    })
  }

}
