import { Injectable } from "@angular/core";
import { IBGGAttributes, IBGGCollection, IBoardgameStatus, ICollectionItemViewModel } from "./mapper.model";

@Injectable()
export class Mapper {

    public static mapBGGCollectionToCollectionViewModel (bggCollection: IBGGCollection, ownerName: string): ICollectionItemViewModel[] {
        return bggCollection.items.item.map(item => ({
            title: item.name._text,
            imgSrc: item.image._text,
            ownerName: ownerName,
            objectId: Number(item._attributes.objectid),
            status: this.mapAttributesToBoardgameStatus(item.status._attributes)
        }))
    }

    private static mapAttributesToBoardgameStatus(attributes: IBGGAttributes): IBoardgameStatus {
        return {
            own: attributes.own === "1",
            prevowned: attributes.prevowned === "1",
            fortrade: attributes.fortrade === "1",
            want: attributes.want === "1",
            wanttoplay: attributes.wanttoplay === "1",
            wanttobuy: attributes.wanttobuy === "1",
            wishlist: attributes.wishlist === "1",
            preordered: attributes.preordered === "1"
        }
    }
}