import React from "react";
export function getinforst(){
    const students = [
        { name: 'John', age: 18, address: '123 Street, City A' },
        { name: 'Jane', age: 17, address: '456 Road, City B' },
        { name: 'Mike', age: 19, address: '789 Lane, City C' }
    ];
   return students.map(students=>
       <table border={2}>
           <td>{students.name}
           </td>
           <td>
               {students.age}
           </td>
           <td>
               {students.address}
           </td>
       </table>);
}
