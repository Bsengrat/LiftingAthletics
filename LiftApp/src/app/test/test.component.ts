import { typeWithParameters } from '@angular/compiler/src/render3/util';
import { Type } from '../type';
import { Component, ElementRef, Inject, OnInit } from '@angular/core';
import { elementAt } from 'rxjs';
import { NgClass } from '@angular/common';

@Component({
  selector: '.app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  private loop : boolean;
  private typeSpeed : number;
  private deleteSpeed : number;
  private arr: string;

  Card = {
    SwitchOn: false,
    Opac: '100%'
  }

  printIntro(){
    const par = document.getElementById('panel');
    const wordarr = this.arr.split("");
    const arrLen = wordarr.length
    let timer = 0;
    
    for(let i = 0; i < arrLen; i++)
    {
      const el = document.createElement("span");
      el.innerHTML = wordarr[i];
      timer += 0.175;
      el.style.animation = "transitionSlow " + timer + "s";
      par?.appendChild(el);
      }
}

expandCard() {
  if(this.Card.SwitchOn === false){
    this.Card.SwitchOn = true;
    this.Card.Opac = 'half';
  }
  else if (this.Card.SwitchOn === true) {
    this.Card.SwitchOn = false;
    this.Card.Opac = "full";
  }
}

  constructor(
  ) {
    this.loop = false;
    this.typeSpeed = 50;
    this.deleteSpeed = 50;
    this.arr = "Surpass Your limits";
  }

  ngOnInit(): void {
    this.printIntro();
}
}
