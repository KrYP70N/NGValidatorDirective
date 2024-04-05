import { Directive, ElementRef, Input } from "@angular/core";
import { ngValidatorOptions, ngValidatorType } from "./ng-validator.interface";

@Directive({
  standalone: true,
  selector: '[ngValidatorDirective]'
})

export class NgValidatorDirective {

  constructor(private ref: ElementRef) {}

  @Input() ngValidatorDirective!: ngValidatorType
  @Input() option!: ngValidatorOptions

  private node: any
  private nodeName!: string
  private validNodeList = ['INPUT', 'SELECT', 'TEXTAREA']


  private validNode() {

    // directive node is input element
    if(this.validNodeList.includes(this.nodeName)) {
      return true
    }

    return false
  }

  ngAfterViewInit() {
    this.node = this.ref.nativeElement
    this.nodeName = this.node.nodeName
    this.validNode()
  }
}
