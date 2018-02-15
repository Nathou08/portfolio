import {Component, OnInit} from '@angular/core';
import * as Typed from 'typed.js';

@Component({
    selector: 'app-acceuil',
    templateUrl: './acceuil.component.html',
    styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {

    ngOnInit() {
        var options = new Typed(".acceuilBienvenue", {
            strings: ["<h1>Bienvenue sur mon site Portfolio !</h1>", "<h1>Sur mon site je vous présente mon CV et mes projets réalisés .</h1>"],

            typeSpeed: 30,
            backSpeed: 60,
        });


    }

}
