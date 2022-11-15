import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './server/server.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
@NgModule({
  declarations: [
    AppComponent,
    ServersComponent,
    ServerComponent,
    ShoppingListComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
