export interface IBGGCollection    {
    "_declaration": {
        "_attributes": {
            "version": string,
            "encoding": string,
            "standalone": string
        }
    },
    "items": {
        "_attributes": {
            "totalitems": string,
            "termsofuse": string,
            "pubdate": string
        },
        "item": IBGGCollectionItem[]
    }
}

export interface IBGGCollectionItem {
    "_attributes": {
        "objecttype": string,
        "objectid": string,
        "subtype": string,
        "collid": string
    },
    "name": {
        "_attributes": {
            "sortindex": string
        },
        "_text": string
    },
    "yearpublished": {
        "_text": string
    },
    "image": {
        "_text": string
    },
    "thumbnail": {
        "_text": string
    },
    "status": {
        "_attributes": {
            "own": string,
            "prevowned": string,
            "fortrade": string,
            "want": string,
            "wanttoplay": string,
            "wanttobuy": string,
            "wishlist": string,
            "preordered": string,
            "lastmodified": string
        }
    },
    "numplays": {
        "_text": string
    }
}

export interface IBGGAttributes {
    "own": string,
    "prevowned": string,
    "fortrade": string,
    "want": string,
    "wanttoplay": string,
    "wanttobuy": string,
    "wishlist": string,
    "preordered": string,
}

export interface ICollectionItemViewModel {
    title: string,
    imgSrc: string,
    ownerName: string,
    objectId: number
    status: IBoardgameStatus
}

export interface IBoardgameStatus {
    [key: string]: boolean,
    // own: boolean,
    // prevowned: boolean,
    // fortrade: boolean,
    // want: boolean,
    // wanttoplay: boolean,
    // wanttobuy: boolean,
    // wishlist: boolean,
    // preordered: boolean
}