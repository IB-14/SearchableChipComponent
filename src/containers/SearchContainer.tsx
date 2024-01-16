import { useEffect } from 'react';
import fetchUserList from '../api/fetchUserList';
import { useUserContext } from '../contexts/UserContext';
import SearchBox from '../components/SearchBox';

export default function SearchContainer () {
    const { setUserList, setLoading} = useUserContext();
    // const [selectedUsers]

    useEffect(() => {
        async function fetchDataAndPopulateUserList(): Promise<void> {
            try {
              const usersData = await fetchUserList();
              setUserList(usersData);
              setLoading(false);
            } catch (error) {
              console.error('Error: ', error);
              setLoading(false);
            }
        }
        fetchDataAndPopulateUserList();
    }, [setUserList, setLoading]);

  return (
    <div className='flex justify-center items-center w-full h-full overflow-hidden'>
        <SearchBox />
    </div>
  );
}
