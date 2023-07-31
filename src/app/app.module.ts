import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartHereComponent } from './components/start-here/start-here.component';
import { AboutComponent } from './components/about/about.component';
import { RandomComponent } from './components/random/random.component';
import { RecommendsComponent } from './components/recommends/recommends.component';
import { ForumComponent } from './components/forum/forum.component';
import { ClassicsComponent } from './components/classics/classics.component';
import { SrFerreiroComponent } from './components/sr-ferreiro/sr-ferreiro.component';
import { WelcomeNewReadersComponent } from './components/welcome-new-readers/welcome-new-readers.component';
import { EmailSubscriptionComponent } from './components/email-subscription/email-subscription.component';
import { FeaturedArticlesComponent } from './components/featured-articles/featured-articles.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CardComponent } from './components/card/card.component';
import { ButtonComponent } from './components/button/button.component';
import { SocialMediaIconsComponent } from './components/social-media-icons/social-media-icons.component';

@NgModule({
  declarations: [
    AppComponent,
    StartHereComponent,
    AboutComponent,
    RandomComponent,
    RecommendsComponent,
    ForumComponent,
    ClassicsComponent,
    SrFerreiroComponent,
    WelcomeNewReadersComponent,
    EmailSubscriptionComponent,
    FeaturedArticlesComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    CardComponent,
    ButtonComponent,
    SocialMediaIconsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
