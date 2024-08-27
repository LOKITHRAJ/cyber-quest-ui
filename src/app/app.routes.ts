import { Routes } from '@angular/router';
import { CyberSavvyComponent } from './cyber-savvy/cyber-savvy.component';
import { CyberHomeComponent } from './cyber-home/cyber-home.component';

export const routes: Routes = [
    {path: 'home', component: CyberHomeComponent},
    {path: 'cyber-savvy', component : CyberSavvyComponent}
];
