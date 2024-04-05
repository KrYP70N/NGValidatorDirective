export type NgValidatorType = String

export interface NgValidatorOptions {
  eventCtrls?: {
    keydown?: Boolean
    keyup?: Boolean
    blur?: Boolean
    click?: Boolean
  }
}

export interface Branch {
  name: String
  node: HTMLElement
}
