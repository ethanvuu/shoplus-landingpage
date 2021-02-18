import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';
import { CONFIG } from './config';
import { from } from 'rxjs'

@Injectable({
   providedIn: 'root'
})
export class ContentfulService {
   private cdaClient = createClient({
      space: CONFIG.space,
      accessToken: CONFIG.accessToken
   });

   getContents(contentId, query?: object) {
      return from(this.cdaClient.getEntries(Object.assign({
         content_type: contentId
      }, query))
         .then(res => res.items))
   }
}
