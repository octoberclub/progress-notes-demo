import React, { useContext, useEffect, useState } from "react";
import UserContext from '../UserContext';

export const UserSelect = () => {
  const [users, setUsers] = useState<string[]>([]);
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    const loadUsers = async () => {
      // TODO read users from API and do auth login to set current user
      setUsers(['Michelle', 'Merlin']);
    };

    loadUsers();
  }, []);

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement> ) => {
    setUser(e.target.value);
  }

  const renderUserOptions = () => {
    return users.map((user) => <option key={user} value={user}>{user}</option>);
  };

  return (
    <div className="user-select">
      <label className="user-label">Current user</label>
      <select name="users" id="users" value={user} onChange={handleSelect}>
        {renderUserOptions()}
      </select>
    </div>
  );
};

export default UserSelect;
