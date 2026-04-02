import { Component } from "@angular/core";
import { FormBuildExternalService } from "./form-build-external-service";

@Component({
  selector: "app-form-builder-external-service",
  imports: [],
  templateUrl: "./form-builder-external-service.html",
  providers: [],
})
export class FormBuilderExternalService {
  constructor(
    private readonly _formControllerService: FormBuildExternalService
  ) {}
}
// Janeiro, fevereiro, marco, abril, maio
// junho, julho, agosto, setembro, outubro
//
