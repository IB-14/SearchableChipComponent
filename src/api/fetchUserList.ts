import IUser from "../interfaces/User.interface";

const fetchUserList = async () => {
    try {
        const response = await fetch('https://hub.dummyapis.com/employee?noofRecords=50&idStarts=0001');
        const data = await response.json();
        const userList: IUser[] = data.map((user: any) => ({
            id: user.id,
            name: user.firstName + " " + user.lastName,
            email: user.email
        }));
        
        // Creating user for myself and adding in the dummy data
        const me = {
            id: 0,
            name: "Ishan Bhardwaj",
            email: "ishan197231@gmail.com"
        }
        userList.push(me);

        // Sorting the users based on name
        userList.sort((a,b) => a.name.localeCompare(b.name));
        return userList;
    } catch (error) {
        console.error(error);
        throw new Error('Error fetching user list');
    }
};

export default fetchUserList;
