// Importar modulos del roputer de Angular

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// importar componentes

import { HomeComponent } from './home/home.component';
import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { VideojuegoComponent } from './videojuego/videojuego.component';
import { CursosComponent } from './cursos/cursos.component';

// Array de rutas
const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'zapatillas', component: ZapatillasComponent},
    {path: 'cursos', component: CursosComponent},
    {path: 'cursos/:nombre/:followers', component: CursosComponent},
    {path: 'videojuego', component: VideojuegoComponent},
    {path: '**', component: HomeComponent}
];
// Exportar el modulo del router

export const appRoutingProviders: any [] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

