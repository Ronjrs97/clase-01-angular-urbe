import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'counter',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterComponent {

  counter = 5;
  counterSignal = signal(5);

  constructor(){
    setInterval(() => {
      // this.counter += 1;
      this.counterSignal.update( (current) => current + 1);
    }, 1000)
  }

  increaseBy(value: number){
    this.counter += value;
    this.counterSignal.update( (current) => current + value);
  }

  decreaseBy(value: number){
    this.counter -= value;
    this.counterSignal.update( (current) => current - value);
  }

  resetCounter(){
    this.counter = 0;
    this.counterSignal.set(0);
  }

 }
