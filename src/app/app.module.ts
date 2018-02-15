import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {environment} from '../environments/environment';
import {AcceuilComponent} from './acceuil/acceuil.component';
import {CurriculumVitaeComponent} from './curriculum-vitae/curriculum-vitae.component';
import {ProjetsComponent} from './projets/projets.component';
import {ContactsComponent} from './contacts/contacts.component';

@NgModule({
    declarations: [
        AppComponent,
        AcceuilComponent,
        CurriculumVitaeComponent,
        ProjetsComponent,
        ContactsComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot([
            {
                path: '',
                component: AcceuilComponent

            },
            {
                path: 'acceuil',
                component: AcceuilComponent
            },
            {
                path: 'curriculumVitae',
                component: CurriculumVitaeComponent
            },
            {
                path: 'projets',
                component: ProjetsComponent
            },
            {
                path: 'contacts',
                component: ContactsComponent
            }
        ]),
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
