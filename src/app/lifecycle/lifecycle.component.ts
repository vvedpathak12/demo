import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements 
OnInit,
OnChanges,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy {

  constructor() { 
    console.log("This is Constructor method");
  }

  ngOnInit(): void {
    console.log("This is OnInit method");
    console.log("Testing of ngDoCheck");
  }

  ngOnChanges() : void {
    console.log("This is ngOnChanges method");
  }

  ngDoCheck() : void {
    console.log("This is ngDoCheck method");
  }

  ngAfterContentInit(): void {
    console.log("This is ngAfterContentInit method");
  }

  ngAfterContentChecked(): void {
    console.log("This is ngAfterContentChecked method");
  }

  ngAfterViewInit(): void {
    console.log("This is ngAfterViewInit method");
  }

  ngAfterViewChecked(): void {
    console.log("This is ngAfterViewChecked method");
  }

  ngOnDestroy(): void {
    console.log("This is ngOnDestroy method");
  }

}
