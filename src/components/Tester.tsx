import * as React from 'react';
import { useUserContext } from '../contexts/UserContext';

export interface IAppProps {
}

export default function Tester (props: IAppProps) {
    
const { userList} = useUserContext();
  return (
    <div className='tester'>
      {userList.map((user) => (
            <ul>{user.name}  {user.email}</ul>
        ))}
    </div>
  );
}
