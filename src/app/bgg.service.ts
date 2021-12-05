import { appConfig } from './app.config';
import { ICollectionItemViewModel } from './helpers/mapper.model';
import { XmlParser } from './helpers/xml-parser';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mapper } from './helpers/mapper';

@Injectable()
export class BGGService { 
  constructor(private http: HttpClient, private parser: XmlParser) {}

  public async getCollectionDataAsync(): Promise<ICollectionItemViewModel[]> {
    const collection: ICollectionItemViewModel[] = []

    for (let user of appConfig.users) {
      const url = `https://www.boardgamegeek.com/xmlapi2/collection?username=${user.bggusername}`
      const xmlResult = await this.http.get(url, { responseType: 'text' }).toPromise();
      const json = this.parser.parseXmlToJs(xmlResult ?? "")
      const userCollectionViewModel = Mapper.mapBGGCollectionToCollectionViewModel(json, user.name)
      collection.push(...userCollectionViewModel)
    }

    collection.sort((a,b) => {
      if(a.title > b.title) 
        {return 1} 
      else 
        {return -1}
    });

    return collection
  }
}
