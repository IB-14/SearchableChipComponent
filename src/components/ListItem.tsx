import * as React from 'react';
import IUser from '../interfaces/User.interface';
import { Hashicon } from '@emeraldpay/hashicon-react';
import { useUserContext } from '../contexts/UserContext';

export interface IListItemProps {
    user: IUser
}

export function ListItem (props: IListItemProps) {
    const { selectedUsers, setSelectedUsers} = useUserContext();

    const handleOnSelection = () => {
        setSelectedUsers([...selectedUsers, props.user])
    }

    return (
        <div 
            className='px-4 py-2 w-full flex items-center justify-between gap-4 cursor-pointer hover:bg-neutral-200 z-50'
            onClick={handleOnSelection}
        >
            <Hashicon
                value={props.user.name}
                size={32}
            />
            <span>
                {props.user.name}
            </span>
            <span className='text-xs text-gray-400 font-medium'> 
                {props.user.email}
            </span>
        </div>
    );
}
