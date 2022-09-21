import { Request } from 'express';
 


export interface IShortUrlSettings {
    uid: string;
    enableProxy: boolean;
    enableTracking: boolean;  // browser, time, location, ip, language, mobile/pc, orientation, screen size, fingerprint, ref, history.length, 
    enablePassword: boolean; 
    enableCite: boolean; 
   // enableCaching: boolean; //
    enableAdvertisement: boolean;  //
    enableCustomAdvertisement: boolean;  
    enableCustomDomain: boolean;  
    qrCodeColor: string; 
    qrCodeLogoUrl: string; 
    citeText: string;  
    password: string;  
    customDomain: string;  
    addvertisementHtml: string;  //advertisement page html
    addvertisementTimeLimit: number;  //time limit to skip 
    headerHTML:string;   //read from 
    title:string;
    description:string;
    imageUrl:string;  
}

export interface IShortUrl {
    uid: string;
    url: string;
    hash: string; 
}

export interface IGetShortUrlByUidReq extends Request<{ uid: IShortUrl['uid'] }> { }
export interface IGetShortUrlByUrlReq extends Request<{ url: IShortUrl['url'] }> { }
export interface IAddShortUrlReq extends Request{}