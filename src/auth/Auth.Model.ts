import { Request } from 'express';
 
/**
 * Used for login data
 */
export interface IUserAuthData {
    email: string;
    password: string;
    token: string;   
    id: string;   
}

/**
 * Used for login data
 */
export interface ILogin {
    email: string;
    password: string;
    token: string;   
}

/**
 * Used for return login data
 */
 export interface IUser {
    id: string;
    userGroupId: string;
    name: string; 
    email: string;
    mobile: string;   
    level: number;   
    image: string;   
    lastLogin: Date;   
    createTime: Date;   
}



/**
 * Used for return login data
 */
 export interface IUserGroup {
    id: string; 
    name: string; 
    ownerUserId: string;
    createTime: Date;    
}

/**
 * Used for return login data
 */
 export interface ILoginHistory {
    userId: string; 
    date: Date;    
    ip: string; 
    deviceType: string;
    deviceScreen: string;
}




/**
 * Used for register data
 */
export interface IRegister {
    name: string;
    mobile: string;
    email: string;
    password: string;
    token: string;   
}

/**
 * Used for 2 factor auth second login step data. Code to eemail
 */
export interface ILogin2F { 
    code: string;
    token: string;   
}

/**
 * Used for 3 factor auth third login step data. Image selection
 */
export interface ILogin3F { 
    image: string;
    token: string;  
}

/**
 * Used for forgot password data
 */
export interface IForgotPassword {
    email: string; 
    token: string;  
}

 
export interface ILoginReq extends Request<{ email: ILogin['email'] ,  password: ILogin['password'],  token: ILogin['token']  }> { }
export interface ILogin2FReq extends Request<{  code: ILogin2F['code'],  token: ILogin2F['token']  }> { }
export interface ILogin3FReq extends Request<{  code: ILogin3F['image'],  token: ILogin3F['token']  }> { }
export interface IRegisterReq extends Request<{ name: IRegister['name'] , mobile: IRegister['mobile'] , email: IRegister['email'] ,  password: IRegister['password'],  token: IRegister['token']  }> { }
export interface IForgotPasswordReq extends Request<{  email: ILogin['email'] ,  token: ILogin['token']  }> { }
 