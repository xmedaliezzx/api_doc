import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { JSONDOC } from './content/jsondoc';

@Injectable({
  providedIn: 'root',
})
export class GeneralService {
  constructor() {}

  mapSwaggerDocToServices(searchStr?: string) {
    //const searchStr = '/wallets/{wallet}/coupons';
    const getAll = !searchStr;
    const methods: {
      url: string;
      method: string;
      response: any;
      body: any;
      queryParams: any;
    }[] = [];

    const resultArr = Object.entries(JSONDOC.paths).filter(
      ([key, value]) => getAll || key.includes(searchStr || '')
    );

    resultArr.map(([key, value]) => {
      Object.entries(value).map(([k, v]) => {
        const requestBodyContent = v['requestBody']?.content?.[
          `multipart/form-data`
        ]
          ? v['requestBody']?.content?.[`multipart/form-data`]
          : v['requestBody']?.content?.[`application/json`];
        const reponses = Object.entries(v['responses']).map(
          ([elKey, elVal]: [string, any]) => {
            elVal.content = this.doStuff(
              elVal.content?.[`application/json`]?.schema
            );
            return [elKey, elVal];
          }
        );
        const requestBody = this.doStuff(requestBodyContent?.schema);
        methods.push({
          url: key,
          method: k,
          response: Object.fromEntries(reponses),
          body: requestBody ? requestBody : requestBodyContent?.schema,
          queryParams: v['parameters'],
        });
      });
    });
    console.log(methods);
  }

  private doStuff(schemaObj: any) {
    let [schemaPath, location] = this.getSchemaPath(schemaObj);
    let schema = null;
    switch (location) {
      case '$ref':
        schema = schemaPath ? this.fetchSchema(schemaPath) : schemaObj;
        break;
      case 'properties.data.items.$ref':
        schema = {
          ...schemaObj,
          properties: {
            ...schemaObj.properties,
            data: {
              ...schemaObj.properties.data,
              items: schemaPath
                ? this.fetchSchema(schemaPath)
                : schemaObj.properties.data.items,
            },
          },
        };
        break;
      case 'properties.data.items.properties':
        schema = {
          ...schemaObj,
          properties: {
            ...schemaObj.properties,
            data: {
              ...schemaObj.properties.data,
              items: {
                ...schemaObj.properties.data.items,
                properties: Object.fromEntries(
                  Object.entries(
                    schemaObj.properties.data.items.properties
                  ).map(([k, v]: [string, any]) => {
                    if (_.has(v, '$ref')) v = this.fetchSchema(v['$ref']);
                    return [k, v];
                  })
                ),
              },
            },
          },
        };
        break;
    }

    return schema;
  }

  private fetchSchema(schemaPath: string) {
    const search = schemaPath?.split('/').pop();
    const schema: any = Object.entries(JSONDOC.components.schemas).find(
      ([key, value]) => key === search
    );
    return schema ? Object.fromEntries([schema]) : null;
  }

  private getSchemaPath(
    schemaObj: any
  ): [schemaPath: string | null, location: string | null] {
    let schemaPath = null;
    let location = null;
    if (_.has(schemaObj, 'properties')) {
      if (_.has(schemaObj, 'properties.data.items.$ref')) {
        location = 'properties.data.items';
        schemaPath = schemaObj.properties.data.items['$ref'];
      } else if (_.has(schemaObj, 'properties.data.items.properties')) {
        location = 'properties.data.items.properties';
      }
    }
    if (_.has(schemaObj, '$ref')) {
      schemaPath = schemaObj['$ref'];
      location = '$ref';
    }
    return [schemaPath, location];
  }
}
