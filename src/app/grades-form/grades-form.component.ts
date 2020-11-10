import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-grades-form',
  templateUrl: './grades-form.component.html',
  styleUrls: ['./grades-form.component.css']
})
export class GradesFormComponent implements OnInit {
  constructor(private fb: FormBuilder) { }

  gradesCalculatorForm: FormGroup;

  ngOnInit() {
    this.gradesCalculatorForm = this.fb.group({
      courseName: [''], // default name of input, synchronous validators, asynchronous validators
      targetGrade: ['first'],
      year: ['firstYear'],
      modules: this.fb.array([
        this.addModulesFormGroup()
      ])
    });

    // this.gradesCalculatorForm = new FormGroup({
    //   courseName: new FormControl(),
    //   targetGrade: new FormControl(),
    //   year: new FormControl(),
    //   modules: new FormGroup({
    //     moduleName: new FormControl(),
    //     assess: new FormControl(),
    //     grade: new FormControl(),
    //     weight: new FormControl()
    //   })
    // });

    // https://stackblitz.com/edit/hashtaagblog2-1?file=app%2Fapp.component.html
  }

  addAssessment(): void {
    //
  }

  addModulesFormGroup(): FormGroup {
    return this.fb.group({
      moduleName: [''],
      assess: [''],
      grade: [''],
      weight: ['']
    })
  }

  addModule(): void {
    (<FormArray>this.gradesCalculatorForm.get('modules')).push(this.addModulesFormGroup());
  }

  get getFormModules() {
    return <FormArray>this.gradesCalculatorForm.get('modules');
  }

  onLoadData(): void {
    this.gradesCalculatorForm.setValue({
      courseName:"Computer Science",
      targetGrade:"first",
      year:"firstYear",
      modules:[
         {
            moduleName:"Programming",
            assess:"Assignment 1",
            grade:"90",
            weight:"10"
         }
      ]
   });
  }

  onSaveData(): void {
    //
  }

  onSubmit(): void {
    console.log(this.gradesCalculatorForm.value);
  }

}
