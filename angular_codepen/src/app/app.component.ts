import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component'
import { LeftAsideComponent } from './leftaside/leftaside.component';
import { MainBody } from './mainbody/mainbody.component'
import { RightMain } from './rightmain/rightmain.component';
import { RouterLink } from '@angular/router';
import { LatestNews } from './latest-news/latest-news.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,LeftAsideComponent,MainBody,RightMain,RouterLink,LatestNews],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_test';
}
