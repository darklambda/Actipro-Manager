import { Component } from '@angular/core';
import { BarcodeScanner, BarcodeScannerOptions, BarcodeScanResult} from "@ionic-native/barcode-scanner/ngx";
import { NavController} from "@ionic/angular";

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  result: BarcodeScanResult;


  constructor(private barcodeScanner: BarcodeScanner,
              private navCtrl: NavController){

  }

  async scanQr(){

      try {
          const options: BarcodeScannerOptions = {
              prompt: "Escanee Codigo QR"
          };

          this.result = await this.barcodeScanner.scan(options);
          this.navCtrl.navigateForward('/ext-register/' + this.result.text);
      }catch (error) {
          console.error(error);

      }
  }

}
