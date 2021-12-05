import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BGGService } from './bgg.service';
import { ICollectionItemViewModel, IBoardgameStatus } from './helpers/mapper.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public collectionCache: ICollectionItemViewModel[] = [];
  public collection: ICollectionItemViewModel[] = [];
  public tabs = [
    {key: "Im Besitz", value: "own"},
    {key: "Vormals Besessen", value: "prevowned"},
    {key: "Wunschliste", value: "wishlist"},
    {key: "Vorbestellt", value: "preordered"},
  ]

  public activeTab: string = "own"

  constructor(private bggService: BGGService) {  }

  async ngOnInit() {
    this.collectionCache = (await this.bggService.getCollectionDataAsync())
    
    this.filterCollection()
  }

  public onNavClick(tabValue: string){
    this.activeTab = tabValue

    this.filterCollection()
  }

  private filterCollection() {
    this.collection = this.collectionCache.filter(boardgame => boardgame.status[this.activeTab] === true);
  }

  public onTileClick(objectid: number){
    document.location = (`https://boardgamegeek.com/boardgame/${objectid}`)
  }
}
