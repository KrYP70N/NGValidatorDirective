import { Directive, ElementRef, Input } from "@angular/core";
import { Branch, NgValidatorOptions, NgValidatorType } from "./ng-validator.interface";
import { customLog } from "./log.interface";

@Directive({
  standalone: true,
  selector: '[ngValidatorDirective]'
})

export class NgValidatorDirective {

  constructor(private ref: ElementRef) {}

  @Input() ngValidatorDirective!: NgValidatorType
  @Input() option!: NgValidatorOptions

  private node: any
  private nodeName!: string
  private nodeTree: Branch[] = []
  private validNodeList = ['INPUT', 'SELECT', 'TEXTAREA']
  private validNode: HTMLElement | Boolean = false

  private setDefaultVal() {
    this.node = this.ref.nativeElement
    this.nodeName = this.node.nodeName
  }

  private collectChildNodes(node: HTMLElement) {
    node.childNodes.forEach((item) => {
      this.nodeTree.push({
        name: item.nodeName,
        node: item as HTMLElement
      })
      if(item.childNodes) {
        this.collectChildNodes(item as HTMLElement)
      }
    })
  }

  private getValidNode() {
    for (const { name, node } of this.nodeTree) {
      if (this.validNodeList.includes(name.toString())) {
        this.validNode = node
        break
      }
    }
  }

  private checkValidNode() {
    if(this.validNodeList.includes(this.nodeName)) {
      // directive node is input element
      this.validNode = this.node
    } else {
      console.warn(customLog.notRootComponent)
      this.collectChildNodes(this.node)
      this.getValidNode()
    }
  }

  ngAfterViewInit() {
    this.setDefaultVal()
    this.checkValidNode()

    if(!this.validNode) {
      throw new Error(customLog.invalidComponent)
    }
  }
}
