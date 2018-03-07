import { Injectable } from '@angular/core';

import { HttpClient,HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistas:any[]=[];
  urlSpotify : string="https://api.spotify.com/v1/";
  token : string="BQA4hvFTR6icMsXWUtQMp6y7I0lh4hRyx80qsV_FGF81M_6cMJ3B3G8TH2cNqLxxX10vPf0T9WYvppjKWsA";
  

  constructor( public http:HttpClient) {  }

  private getheaders():HttpHeaders{
    
    let headers=new HttpHeaders({
      'authorization': 'Bearer ' + this.token
    });
    return headers;
  }
   

  getArtistas( termino:string){

     let url=`${ this.urlSpotify }search?query=${ termino }&type=artist&offset=0&limit=20`;
     
  let headers=this.getheaders();
  
    return this.http.get(url ,{headers})
               .map((resp:any)=>{
                  this.artistas=resp.artists.items;
                  return this.artistas;
               });
  }

  getArtista( id:string){
    let url=`${ this.urlSpotify }artists/${ id }`;
    
    let headers=this.getheaders();
   return this.http.get(url ,{headers});
  }

  getTop( id:string){
      let url=`${ this.urlSpotify }artists/${ id }/top-tracks?country=US`;
       
      let headers=this.getheaders();
     return this.http.get(url ,{headers});
    }
  }
