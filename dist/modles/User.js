// import User from '../Types/User';
// import db from '../db-config';
// import {OkPacket, RowDataPacket} from 'mysql2'
//
// export const findAllUser = (callback: Function) => {
//   const queryString = 'SELECT * FROM users'
//
//   db.query(queryString, (error, result) => {
//     if (error) {
//       callback(error)
//     }
//
//     const rows = <RowDataPacket[]> result
//     const things: User[] = []
//
//     rows.forEach(row => {
//       const thing: User = {
//         ...row
//       }
//       things.push(thing)
//     })
//
//     callback(null, things)
//   })
// }
