import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'
import { ContentfulService } from './contenful.service';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './app-responsive.component.css']
})
export class AppComponent implements OnInit {
  constructor(private contenful: ContentfulService,
    private sanitizer: DomSanitizer) { }
  beforeSource$: Observable<any>;
  afterSource$: Observable<any>;
  painPoint$: Observable<any>;
  testimonials$: Observable<any>;
  banner;
  howToUse;
  videosOverlay = [true, true, true, true];

  //SHOPLUS URLS
  logoURL = "https://www.shoplus.me/vi/";
  buttonURL = "https://oms.shoplus.me/sign_in?auto=1";
  iOS = "https://apps.apple.com/us/app/shoplus-do-less-sell-more/id1316324296";
  android = "https://play.google.com/store/apps/details?id=com.ikala.shoplus";
  youtube = "https://www.youtube.com/channel/UCmE-chPKGqguiq3JaHfiWTw";
  facebook = "https://www.facebook.com/shoplusVN/";
  messenger = "https://www.messenger.com/t/shoplusVN";

  ngOnInit(): void {
    /** INFOR*/
    console.info("Please contact me as 'vietanhvu.fullstack.dev@gmail.com' if you found bugs !")
    /**URLS*/
    this.contenful.getContents('links').pipe(map(value => value[0])).subscribe( (value:any) => {
      this.iOS = value.fields.appStore;
      this.android = value.fields.googlePlay;
      this.buttonURL = value.fields.button;
      this.logoURL = value.fields.logo;
      this.youtube = value.fields.youtube;
      this.facebook = value.fields.facebook;
      this.messenger = value.fields.messenger;
    })
    /*BANNER*/
    this.contenful.getContents('banner')
      .pipe(
        map((fields: any[]) => ({ title: fields[0].fields.title, subTitle: fields[0].fields.subTitle, button: fields[0].fields.button, image: fields[0].fields.image.fields.file.url })
        )).subscribe(value => {
          this.banner = value
        })
    /*PAIN POINT*/
    this.painPoint$ = this.contenful.getContents('painPoint')
      .pipe(
        map((fields: any[]) => {
          fields.sort((a, b) => +a.fields.order - +b.fields.order);
          return fields.map(item => ({ title: item.fields.title, text: item.fields.text, image: item.fields.image.fields.file.url }));
        }))
    /*Solution*/
    this.beforeSource$ = this.contenful.getContents('withoutShoplus')
      .pipe(
        map((fields: any[]) => {
          fields.sort((a, b) => +a.fields.order - +b.fields.order);
          return fields.map(item => ({ text: item.fields.text, icon: item.fields.icon.fields.file.url }));
        }))
    this.afterSource$ = this.contenful.getContents('withShoplus')
      .pipe(
        map((fields: any[]) => {
          fields.sort((a, b) => +a.fields.order - +b.fields.order);
          return fields.map(item => ({ text: item.fields.text, icon: item.fields.icon.fields.file.url }));
        }))
    /**How To Use */
    this.contenful.getContents('howToUse')
      .pipe(
        map((fields: any[]) => ({ iframe: fields[0].fields.iframe + '?autoplay=1', overlay: fields[0].fields.overlay.fields.file.url })
        )).subscribe(value => {
          this.howToUse = value
        })
    /**Testimonials */
    this.testimonials$ = this.contenful.getContents('testimonials')
      .pipe(
        map((fields: any[]) => {
          fields.sort((a, b) => +a.fields.order - +b.fields.order);
          return fields.map(item => ({ iframe: item.fields.iframe + '?autoplay=1', shopName: item.fields.shopName, shopOwner: item.fields.shopOwner, overlay: item.fields.overlay.fields.file.url }));
        }))
  }

  bypassHtmlSecurity(html) {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  bypassTrustResourceUrl(html) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(html);
  }

  playVideo(i, element, src) {   
    if (this.howToUse && this.testimonials$) {
      this.videosOverlay[+i] = !this.videosOverlay[i];
      element.querySelector('iframe').src = src;
      return;
    }
    // element.querySelector('iframe').contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
  }
}
