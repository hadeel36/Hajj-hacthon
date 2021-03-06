import { AuthService } from "./services/core/auth.service";
import { Component } from "@angular/core";
import { Platform } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { Push, PushOptions, PushObject } from "@ionic-native/push";

import { TabsPage } from "../pages/tabs/tabs";
import { LoginPage } from "../pages/login/login";
import { RegisterPage } from "../register/register";
@Component({
  templateUrl: "app.html"
})
export class MyApp {
  rootPage: any = TabsPage;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private push: Push,
    private authService: AuthService,
  ) {
    this.displayPageBasedOnAuthenticationState();
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    // to check if we have permission
    if (platform.is("cordova")) {
      console.log("cardova yay");
      this.push.hasPermission().then((res: any) => {
        if (res.isEnabled) {
          console.log("We have permission to send push notifications");
        } else {
          console.log("We do not have permission to send push notifications");
        }
      });

      // Create a channel (Android O and above). You'll need to provide the id, description and importance properties.
      this.push
        .createChannel({
          id: "testchannel1",
          description: "My first test channel",
          // The importance property goes from 1 = Lowest, 2 = Low, 3 = Normal, 4 = High and 5 = Highest.
          importance: 3,
        })
        .then(() => console.log("Channel created"));
    } else {
      console.log("not cordova");
    }

    // to initialize push notifications

    const options: PushOptions = {
      android: {},
      ios: {
        alert: "true",
        badge: true,
        sound: "false",
      },
      windows: {},
      browser: {
        pushServiceURL: "http://push.api.phonegap.com/v1/push",
      },
    };

    const pushObject: PushObject = this.push.init(options);

    pushObject
      .on("notification")
      .subscribe((notification: any) =>
        console.log("Received a notification", notification),
      );

    pushObject
      .on("registration")
      .subscribe((registration: any) =>
        console.log("Device registered", registration),
      );

    pushObject
      .on("error")
      .subscribe(error => console.error("Error with Push plugin", error));
  }

  displayPageBasedOnAuthenticationState() {
    if (this.authService.isAuthenticated()) {
      this.rootPage = TabsPage;
    } else {
      this.rootPage = LoginPage; // LoginPage
    }
  }
}
