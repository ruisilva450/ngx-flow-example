import { Component, ViewChild, ChangeDetectorRef } from "@angular/core";
import { FlowDirective, Transfer } from "@flowjs/ngx-flow";
import { Subscription } from "rxjs";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  @ViewChild("flow", { static: false })
  flow: FlowDirective;

  autoUploadSubscription: Subscription;

  constructor(private cd: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.autoUploadSubscription = this.flow.events$.subscribe(event => {
      switch (event.type) {
        case "filesSubmitted":
        // return this.flow.upload();
        case "newFlowJsInstance":
          this.cd.detectChanges();
      }
    });
  }

  ngOnDestroy() {
    this.autoUploadSubscription.unsubscribe();
  }

  trackTransfer(transfer: Transfer) {
    return transfer.id;
  }
}
