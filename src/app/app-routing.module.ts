import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'guest',
    pathMatch: 'full'
  },
  {
    path: 'welcome',
    loadChildren: () => import('./page/welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./page/about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./page/contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./page/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'guest',
    loadChildren: () => import('./page/guest/guest.module').then( m => m.GuestPageModule)
  },
  {
    path: 'projects',
    loadChildren: () => import('./page/projects/projects.module').then( m => m.ProjectsPageModule)
  },
  {
    path: 'skills',
    loadChildren: () => import('./page/skills/skills.module').then( m => m.SkillsPageModule)
  },
  {
    path: 'arcade',
    loadChildren: () => import('./page/projects/arcade/arcade.module').then( m => m.ArcadePageModule)
  },
  {
    path: 'tictactoe',
    loadChildren: () => import('./page/projects/arcade/tictactoe/tictactoe.module').then( m => m.TictactoePageModule)
  },
  {
    path: 'rockpaperscisors',
    loadChildren: () => import('./page/projects/arcade/rockpaperscisors/rockpaperscisors.module').then( m => m.RockpaperscisorsPageModule)
  },
  {
    path: 'office',
    loadChildren: () => import('./page/projects/office/office.module').then( m => m.OfficePageModule)
  },
  {
    path: 'notetaker',
    loadChildren: () => import('./page/projects/office/notetaker/notetaker.module').then( m => m.NotetakerPageModule)
  },
  {
    path: 'weather',
    loadChildren: () => import('./page/projects/office/weather/weather.module').then( m => m.WeatherPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
