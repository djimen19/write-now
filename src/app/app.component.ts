import { Component } from '@angular/core';

import { HeaderComponent } from './header/app.headerComponent';
import { NavComponent } from './nav/app.navComponent';
import { ContentComponent } from './content/app.contentComponent';
import { FooterComponent } from './footer/app.footerComponent';
import { VideoComponent } from './video/app.videoComponent';
import { Content2Component } from './content/app.newsComponent';
import { Content3Component } from './content/app.newstopComponent';
import { VideoOneComponent } from './video/app.videoOneComponent';
import { VideoTwoComponent } from './video/app.VideoTwoComponent';
import { VideoFourComponent } from './video/app.videoFourComponent';
import { VideoFiveComponent } from './video/app.videoFiveComponent';
import { ExtraVidsComponent } from './video/app.extraVidsComponent';
import { ExtraVidsOneComponent } from './video/app.extraVidsOneComponent';
import { ExtraVidsTwoComponent } from './video/app.extraVidsTwoComponent';
import { ExtraVidsFourComponent } from './video/app.extraVidsFourComponent';
import { ExtraVidsFiveComponent } from './video/app.extraVidsFiveComponent';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Automatically deployed app works!";
}


