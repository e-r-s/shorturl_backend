export const AuthQueries = {

    GetAllUserIds: `
    SELECT
        uid, url, hash
    FROM SHORTURL.USER
    `,

    GetUserByEmailAndPassword: `
    SELECT *
    FROM SHORTURL.USER
    WHERE
    email = ? AND password= ?
    `,

    GetByUrl:`
    SELECT
        uid, url, hash
    FROM SHORTURL.SHORTURL
    WHERE
    hash = ?
    `,
  
    Add: `
    INSERT INTO SHORTURL.SHORTURL (uid, url, hash)
      VALUES (?, ?, ?);
    `
  };