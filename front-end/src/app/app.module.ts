import { TripPilgrimsPage } from "./../pages/trip-pilgrims/trip-pilgrims";
import { AuthService } from "./services/core/auth.service";
import { TripsPage } from "./../pages/trips/trips";
import { Push } from "@ionic-native/push";
import { LanguagesPage } from "./../pages/languages/languages";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { NgModule, ErrorHandler } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { IonicApp, IonicModule, IonicErrorHandler } from "ionic-angular";
import { MyApp } from "./app.component";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { IonicStorageModule } from "@ionic/storage";

import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";

import { QrCodePage } from "./../pages/qr-code/qr-code";
import { ContactPage } from "../pages/contact/contact";
import { ScanQrCodePage } from "../pages/scan-qr-code/scan-qr-code";
import { HomePage } from "../pages/home/home";
import { TabsPage } from "../pages/tabs/tabs";

import { NgxQRCodeModule } from "ngx-qrcode2";
import { BarcodeScanner } from "@ionic-native/barcode-scanner";
import { AlertComponent } from "../components/alert/alert";
import { HttpRequestsService } from "./services/http-requests.service";
import { UserMessagesService } from "./services/user-messages.service";
import { LoginPage } from "../pages/login/login";
import { RegisterPage } from "../register/register";
import { RegistrationSuccessPage } from "../pages/registration-success/registration-success";

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

@NgModule({
  declarations: [
    MyApp,
    QrCodePage,
    ContactPage,
    HomePage,
    TabsPage,
    LanguagesPage,
    ScanQrCodePage,
    TripsPage,
    LoginPage,
    RegisterPage,
    RegistrationSuccessPage,
    TripPilgrimsPage,
  ],
  imports: [
    BrowserModule,
    NgxQRCodeModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    QrCodePage,
    ContactPage,
    HomePage,
    TabsPage,
    LanguagesPage,
    ScanQrCodePage,
    TripsPage,
    LoginPage,
    RegisterPage,
    RegistrationSuccessPage,
    TripPilgrimsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    Push,
    AlertComponent,
    HttpRequestsService,
    UserMessagesService,
    AuthService,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
  ],
})
export class AppModule {}
