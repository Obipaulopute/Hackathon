import React, { useState } from 'react';

function AdminTable() {
    const initialUsers = [
        { id: 1, name: 'Alice', age: 20, address:"street 10 flat 121 federal housing estate", record:" N/A" },
        { id: 2, name: 'Bob', age: 20, address:"street 1010 flat 121 federal housing estate", record:"N/A "  },
        { id: 3, name: 'Charlie', age: 22, address:"10 flat 121 federal housing estatestreet 10", record:"N/A " },
      ];
    
      const [users, setUsers] = useState(initialUsers);
      const [sortAscending, setSortAscending] = useState(true);
    
      const handleSort = () => {
        const sortedUsers = [...users].sort((a, b) => {
          if (a.name < b.name) return sortAscending ? -1 : 1;
          if (a.name > b.name) return sortAscending ? 1 : -1;
          return 0;
        });
        setUsers(sortedUsers);
        setSortAscending(!sortAscending);
      };
  return (
    <div className="container m-auto">
      <table className=" min-w-full border border-gray-300">
        <thead>
          <tr>
            <th className="px-1 py-2 border">ID</th>
            <th className="px-2 py-2 border">Name</th>
            <th className="px-2 py-2 border">Age</th>
            <th className="px-2 py-2 border">Address</th>
            <th className="px-2 py-2 border">Record</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="px-1 py-2 border">{user.id}</td>
              <td className="px-2 py-2 border">{user.name}</td>
              <td className="px-2 py-2 border">{user.age}</td>
              <td className="px-2 py-2 border">{user.address}</td>
              <td className="px-2 py-2 border">{user.record}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminTable;
