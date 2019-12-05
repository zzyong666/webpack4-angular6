import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from "./app.component";
export const routes: Routes = [ // Routes类型的数组
    {
        path: 'index',
        component: AppComponent
    }, {
        path: '',
        redirectTo: 'index',
        pathMatch: 'full'
    }
];
@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }