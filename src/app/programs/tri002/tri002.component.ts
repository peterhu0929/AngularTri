import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { GMAP_PARAMETER } from 'src/app/_models/gmap-parameter';

@Component({
  selector: 'app-tri002',
  templateUrl: './tri002.component.html',
  // styleUrls: ['./tri002.component.scss']
})
export class Tri002Component implements OnInit {
  @Input() mapurl: string;
  @Input() width: string;
  @Input() latit: string;
  @Input() longit: string;
  public gmap: GMAP_PARAMETER = new GMAP_PARAMETER();
  frameUrl: any;
  localization: any;
  constructor(private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.gmap.latit = this.latit;
    this.gmap.longit = this.longit;
    this.gmap.language = 'zh-TW';
    this.gmap.scale = '12';
    this.gmap.mode = '';
    // this.getGoogleLocalizationData();
    // this.getData();
    this.getGmapURL();
    // console.log(this.supLang);
  }
  getGmapURL() {
    const URL = 'https://www.google.com/maps?q='
      + this.gmap.latit + ',' + this.gmap.longit + '&hl=' + this.gmap.language
      + '&z=' + this.gmap.scale + '&t=' + this.gmap.mode + '&output=embed';
    console.log(URL);
    return this.frameUrl = this.sanitizer.bypassSecurityTrustResourceUrl(URL);
  }
}
