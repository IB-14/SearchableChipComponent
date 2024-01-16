import * as React from 'react';
import { useUserContext } from '../contexts/UserContext';
import { Hashicon } from '@emeraldpay/hashicon-react';
import { IoIosClose } from "react-icons/io";
import IUser from '../interfaces/User.interface';

export interface IChipComponentProps {
}

export function ChipComponent (props: IChipComponentProps) {
    const { selectedUsers, setSelectedUsers } = useUserContext();

    const removeUser = (user: IUser) => {
        setSelectedUsers(
            selectedUsers.filter((selectedUser) => selectedUser !== user)
          );
    }

    return (
        selectedUsers.length === 0 ? (
            null
        ) :
        <div className='flex flex-row mb-1'>
            {selectedUsers.map((user) => (
                <div className='flex flex-row items-center gap-2 w-max  rounded-full bg-[#E1DFDE] px-2 py-1 mr-4'>
                    <Hashicon
                        value={user.name}
                        size={18}
                    />
                    <span className='text-xs w-full font-medium'>
                        {user.name}
                    </span>
                    <IoIosClose 
                        size={28}
                        onClick={() => removeUser(user)}
                    />
                </div>
            ))}
        </div>
    );
}
