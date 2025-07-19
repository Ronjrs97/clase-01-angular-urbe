import { Component, computed } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  // currentYear = new Date().getFullYear();

  currentYearSignal = computed(() => {
    return new Date().getFullYear();
  })
 }
