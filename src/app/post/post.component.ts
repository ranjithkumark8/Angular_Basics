import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input() postUrl = '';
  @Output() imgSelected = new EventEmitter();

  constructor() {
    console.log('constructor called()', this.postUrl);
  }

  ngOnInit(): void {
    console.log('ngonit called()', this.postUrl);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges tiggered');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck() intilized');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit() is called');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked() is called');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit() is called');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked() is called');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestory() is called');
  }
}
