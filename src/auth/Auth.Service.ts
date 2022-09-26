import { getRecord, getRecords, insertRecord } from "../../db/MySql.Connector";

import { AuthQueries } from "./Auth.Queries";
import { ILogin, IRegister, IUserAuthData, IUser } from "./Auth.Model";

import sha1 from 'crypto-js/sha1';
// import { nanoid } from 'nanoid';
import { customAlphabet } from 'nanoid';
const nanoid = customAlphabet('1234567890qwertyuiopasdfghjklzxcvbnm', 6);
import { AuthCache } from './Auth.Cache';


/**
 * collects generated UIDs to prevent collision.
 * 1M UID is about 8M bytes. Instead of looking DB for every UID we look into an key value array. 
 */
 export const init = async() => {
    const data = await getAllUserIds(); 
    data.forEach(u=>{ 
        AuthCache.addUserId(u.id, u.token); 
    });
  
    console.debug('All UIDs and Hashes are cached. Total data:' + data.length);
    return true;
 };
/**
 * 
 * @returns {IUserAuthData[]} 
 */
const getAllUserIds = async () => { 
    return getRecords<IUserAuthData>(AuthQueries.GetAllUserIds, []); 
};
   

 /**
  * gets a shorturl based on uid provided
  * @param {string} uid 
  * @returns {IShortUrl} 
  */
export const login = async (email: ILogin['email'], password: ILogin['password'],  token: ILogin['token']): Promise<IUser> => { 
    if(AuthCache.checkToken(token)){ 
        let hash = sha1(email+password).toString(); 
        return getRecord<IUser>(AuthQueries.GetUserByEmailAndPassword, [email,hash]);  
    } 
    else{
        return null;
    }
};


 /**
  * gets a shorturl based on uid provided
  * @param {string} uid 
  * @returns {IShortUrl} 
  */
  export const getUser = async (uid: IUser['id']): Promise<IUser> => { 
    return AuthCache.getUser(uid);
    
};
  
  
 
//  /**
//   * adds a new a shorturl record
//   * @param {string} url 
//   * @returns {IShortUrl} 
//   */
//  export const insertShortUrl = async (url: string): Promise<IShortUrl>  => {
     
//     let hash = sha1(url).toString();
    
//     if(AuthCache.checkToken(hash)){  
//         return  getRecord<IShortUrl>(AuthQueries.GetByUrl, [hash]);  
//     } 
//     else{
//         let uid = generateShortId(); 
        
//         const result = insertRecord(AuthQueries.Add, [ uid, url, hash ]);
       
//         if(result){
//             AuthCache.addUserId(uid, hash);  
//             return  { uid, url, hash };
//         }
//         else{
//             return null;
//         }
//     }   
   
//   };

 


 
//  /**
//   * adds a new a shorturl record
//   * @param {string} url 
//   * @returns {IShortUrl} 
//   */
//  export const readPageData = async (url: string): Promise<IShortUrl>  => {
//      return null;
   
//   };

 
 