import { useUserContext } from '../contexts/UserContext';
import { ChipComponent } from './ChipComponent';
import { DynamicSearchList } from './DynamicSearchList';
import { useState } from 'react';

export default function SearchBox () {
    const { selectedUsers, setSelectedUsers } = useUserContext();
    
    const [searchTerm, setSearchTerm] = useState('');
    const [IsSearchListVisible, setSearchListVisible] = useState(false);

    const handleInputChange = (e: { target: { value: any; }; }) => {
        const newSearchTerm = e.target.value;
        setSearchTerm(newSearchTerm);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        // Check if the Backspace key is pressed
        if (e.key === 'Backspace' && searchTerm === '') {
          console.log('Backspace pressed on empty input field');
          selectedUsers.pop();
          setSelectedUsers([...selectedUsers]);
        }
      };

    const SearchInput = () => {
        return (
            <input 
                className='p-1 w-full bg-gray-100 border-0 outline-none' 
                placeholder='Enter name here' 
                value={searchTerm}
                onChange={handleInputChange}
                autoFocus
                onFocus={() => setSearchListVisible(true)}
                onKeyDown={handleKeyDown}
            />
        )
    }

    return (
        <div className='flex flex-col justify-between bg-gray-100 h-1/2 p-10 w-2/3 -mt-8'
        >
            <div className='flex flex-row border-b-2 focus-within:border-blue-400 h-8 w-full'>
                <ChipComponent />
                <SearchInput />
                <div className={
                    IsSearchListVisible && searchTerm.length > 0 ? 'absolute' : 'hidden'
                }>
                    <DynamicSearchList searchTerm={searchTerm} /> 
                </div>
            </div>
            <hr className='h-0.5 text-gray-300 bg-gray-300 w-100 -ml-10 w-screen border-0' />
        </div>
    );
}