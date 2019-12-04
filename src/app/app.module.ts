import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgxFlowModule, FlowInjectionToken } from "@flowjs/ngx-flow";
import Flow from "@flowjs/flow.js";

import { AppComponent } from "./app.component";

@NgModule({
  imports: [BrowserModule, NgxFlowModule, FormsModule],
  providers: [
    {
      provide: FlowInjectionToken,
      useValue: Flow
    }
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
