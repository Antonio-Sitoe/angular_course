import { Component } from "@angular/core";
import { Tab } from "../ui/tabs/tab";
import { Tabs } from "../ui/tabs/tabs";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-user-visualizer",
  imports: [Tabs, Tab, RouterOutlet],
  templateUrl: "./app.user.visualizer.html",
})
export class AppUserVisualizer {}
