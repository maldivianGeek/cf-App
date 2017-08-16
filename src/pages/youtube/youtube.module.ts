import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../app/shared/shared.module';
import { YoutubeVideosComponent } from './youtube-videos/youtube-videos.component';
import { YoutubeVideoComponent } from './youtube-video/youtube-video.component';


@NgModule({
  declarations: [
    YoutubeVideosComponent,
    YoutubeVideoComponent

  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    YoutubeVideosComponent,
    YoutubeVideoComponent

  ],
  entryComponents: [
    YoutubeVideosComponent,
    YoutubeVideoComponent

  ]
})
export class YoutubeModule { }
