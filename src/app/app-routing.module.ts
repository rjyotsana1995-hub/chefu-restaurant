import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'about-us', component: AboutUsComponent },

  { path: 'homepage', component: HomepageComponent },
  { path: 'gallery', component: GalleryComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: 'homepage', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
