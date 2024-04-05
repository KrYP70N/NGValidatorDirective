# NgValidatorDirective

NgValidatorDirective will help you to ctorl your form inputs more easier. 

You only need to use `directive` for control.

| Options               | Descriptions                   |
| --------------------- | ------------------------------ | 
| alpha                 | Alphabet only allow to your input         | 
| numeric               | Numeric only allow to your input          |
| notSpecialChar        | Special character not allow to your input |
| regexp                | Specify `regExp` rule for your input      |
| group                 | You can specify validation group for your input |


```
<input ngValidatorDirective alpha numeric group=[your rules]>
```

