 const AuthCache =  {
    /**
     * All UserIds stored inside this list as Key. and Value is True. 
     */
     userList : [],

    /**
     * All tokens stored inside this list as Key. and Value is True. 
     */
     tokenList : [],

    /**
     * Used to store generated UserIds. AuthCache.userList storing data like [userid]=token.
     * @param {string} uid 
     * @param {string} token 
     */
    addUserId: function(uid, token){
        AuthCache.userList[uid] = { uid:uid, token:token, groupId:'' };
        AuthCache.tokenList[token] = true;
    },    
    /**
    * Used to find User Id. AuthCache.userList storing data like [userid]=true.
    * We don't have to loop for array inside NodeJS. Instead we are using uid as array key. this works faster than for.
    * @param {string} uid 
    */
    checkUserId: function(uid){
        return AuthCache.userList[uid];
    },

    /**
    * Used to find User Id. AuthCache.userList storing data like [userid]=true.
    * We don't have to loop for array inside NodeJS. Instead we are using uid as array key. this works faster than for.
    * @param {string} uid 
    */
    getUser: function(uid){
        return AuthCache.userList[uid];
    },


 
    /**
    * Used to find login token. AuthCache.tokenList storing data like [token]=true.
    * We don't have to loop for array inside NodeJS. Instead we are using hash as array key. this works faster than for.
    * @param {string} token 
    */
    checkToken: function(token){
        return AuthCache.tokenList[token];
    }
}; 
exports.AuthCache =AuthCache;
