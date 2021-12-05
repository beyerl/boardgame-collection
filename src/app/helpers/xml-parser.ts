import { Injectable } from '@angular/core';

@Injectable()
export class XmlParser {
  parser: any;

  constructor() {
    this.parser = require('xml-js');
 }

  parseXmlToJs(xml: string) {
    return JSON.parse(this.parser.xml2json(xml, {compact: true, spaces: 4}));
  }
}
