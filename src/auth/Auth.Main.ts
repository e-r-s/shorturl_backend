import * as AuthService from './Auth.Service';

/**
 * collects generated UIDs to prevent collision.
 */
 export const init = async () => {
    try {
      await AuthService.init();
    } 
    catch (error) {
        console.error('[Auth.controller][init][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
    }
  };