import React from 'react';
import UsersList from '../components/UsersList';


const Users = () => {

    const USERS = [
        {
            id: 1,
            name:'pawel',
            image: 'https://cdn.pixabay.com/photo/2018/08/28/13/29/avatar-3637561__340.png',
            placeCount: '5'
        }
    ]

    return ( 
        <UsersList items={USERS} />
     );
}
 
export default Users;