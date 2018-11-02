import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  @Output() childEvent = new EventEmitter<any>(); // 提供Output裝飾器，讓該事件成為父親模板的事件

  public gmap: GMAP_PARAMETER = new GMAP_PARAMETER();

  public count = 0;
  frameUrl: any;
  // localization: any;
  constructor(private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {

    this.width = (this.width == null) ? '80%' : this.width;
    this.latit = (this.latit == null) ? '23.58' : this.latit;
    this.longit = (this.longit == null) ? '120.58' : this.longit;
    this.gmap.latit = this.latit;
    this.gmap.longit = this.longit;
    this.gmap.language = 'zh-TW';
    this.gmap.scale = '12';
    this.gmap.mode = '';
    // this.getGoogleLocalizationData();
    // this.getData();
    this.getGmapURL();
    // console.log('20181029');
    // console.log(this.latit);
    // console.log(this.longit);
  }
  getGmapURL() {
    // this.gmap.latit = this.latit;
    // this.gmap.longit = this.longit;
    const URL = 'https://www.google.com/maps?q='
      + this.gmap.latit + ',' + this.gmap.longit + '&hl=' + this.gmap.language
      + '&z=' + this.gmap.scale + '&t=' + this.gmap.mode + '&output=embed';
    console.log(URL);
    this.onChildClick();
    return this.frameUrl = this.sanitizer.bypassSecurityTrustResourceUrl(URL);
    // return this.frameUrl = URL;

  }
  onChildClick() {
    // this.childEvent.emit(new Date());
    const nowTime = new Date();

    this.count = this.count + 1;
    this.childEvent.emit(nowTime);
  }
}
