import { Request } from 'express';
 


export interface IShortUrlSettings {
    urlUId: string;
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
    addvertisementImageUrl: string;  //advertisement page html
    addvertisementTimeLimit: number;  //time limit to skip  
    title:string;
    description:string;
    imageUrl:string;  
}

export interface IShortUrl {
    uid: string;
    url: string;
    hash: string; 
    ownerGroupId: string; 
}

export interface IGetShortUrlByUidReq extends Request<{ uid: IShortUrl['uid'] }> { }
export interface IGetShortUrlByGroupIdReq extends Request<{ ownerGroupId: IShortUrl['ownerGroupId'] }> { }
export interface IAddShortUrlReq extends Request{}