import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
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


@NgModule({
  declarations: [
                AppComponent, 
                HeaderComponent, 
                NavComponent,
                ContentComponent,
                FooterComponent,
                VideoComponent,
                Content2Component,
                Content3Component,
                VideoOneComponent,
                VideoTwoComponent,
                VideoFourComponent,
                VideoFiveComponent,
                ExtraVidsComponent,
                ExtraVidsOneComponent,
                ExtraVidsTwoComponent,
                ExtraVidsFourComponent,
                ExtraVidsFiveComponent
  ],
  imports: [
           BrowserModule,
           RouterModule.forRoot([
                    {
                        path: 'video',
                        component: VideoComponent
                    },
                    {
                        path: '',
                        component: ContentComponent
                    },
                    {
                        path: 'content2',
                        component: Content2Component
                    },
                    {
                        path: 'content3',
                        component: Content3Component
                    },
                    {
                        path: 'video1',
                        component: VideoOneComponent
                    },
                    {
                        path: 'video2',
                        component: VideoTwoComponent
                    },
                    {
                        path: 'video4',
                        component: VideoFourComponent
                    },
                    {
                        path: 'video5',
                        component: VideoFiveComponent
                    },
                    {
                        path: 'extravids',
                        component: ExtraVidsComponent
                    },
                    {
                        path: 'extravids1',
                        component: ExtraVidsOneComponent
                    },
                    {
                        path: 'extravids2',
                        component: ExtraVidsTwoComponent
                    },
                    {
                        path: 'extravids4',
                        component: ExtraVidsFourComponent
                    },
                    {
                        path: 'extravids5',
                        component: ExtraVidsFiveComponent
                    },
                ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
