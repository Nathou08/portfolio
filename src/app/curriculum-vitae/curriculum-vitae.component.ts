import {Component, OnInit} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';

@Component({
    selector: 'app-curriculum-vitae',
    templateUrl: './curriculum-vitae.component.html',
    styleUrls: ['./curriculum-vitae.component.css']
})
export class CurriculumVitaeComponent implements OnInit {
    
    constructor(private http: Http) { }
    
    wot = [];
    wotData = function () {
        this.http.get("https://api.worldoftanks.eu/wot/account/list/?application_id=demo&search=Nathou08").subscribe(
            (res: Response) => {
                this.wot = res.json().data;
                console.log(this.wot);
            }
        )
    }
    steam = [];
    steamData = function() {
        this.http.get("http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=74312BFBEA5D0088A9908E9FC75166F7&steamid=76561198216114896&format=json").subscribe(
        (res: Response) => {
            this.steam = res.json().games;
            console.log(this.steam);            
        })
    }
    
    
    ngOnInit() {
        this.wotData();
        this.steamData();
    }

}
