import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    title: 'Librevore Village - Community Living in Montenegro'
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent),
    title: 'About Us - Librevore Village'
  },
  {
    path: 'gallery',
    loadComponent: () => import('./pages/gallery/gallery.component').then(m => m.GalleryComponent),
    title: 'Photo Gallery - Librevore Village'
  },
  {
    path: 'principles',
    loadComponent: () => import('./pages/principles/principles.component').then(m => m.PrinciplesComponent),
    title: 'Our Principles - Librevore Village'
  },
  {
    path: 'join-us',
    loadComponent: () => import('./pages/join-us/join-us.component').then(m => m.JoinUsComponent),
    title: 'Join Our Community - Librevore Village'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
