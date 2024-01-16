import { useEffect, useState } from 'react';
import { useUserContext } from '../contexts/UserContext';
import { ListItem } from './ListItem';

export interface IDynamicSearchListProps {
    searchTerm: string
}

export function DynamicSearchList (props: IDynamicSearchListProps) {
    const { userList, selectedUsers} = useUserContext();
    
    const [filteredItems, setFilteredItems] = useState(userList);

    useEffect(() => {
        // Filter items based on the search term
        const filterItems = (searchTerm: string) => {
            const filtered = userList.filter((user) =>
            !selectedUsers.includes(user) &&
            user.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredItems(filtered);
        }
        filterItems(props.searchTerm);
    }, [props]);

    return (
        <div className='max-h-[30vh] w-full my-8 overflow-y-auto shadow-neutral-300 border-2 border-neutral-200 bg-neutral-50'>
            <div className='flex flex-col w-full'>
                {filteredItems.map((user) => (
                    <ListItem key={user.id} user={user} />
                ))}
            </div>
        </div>
    );
}
