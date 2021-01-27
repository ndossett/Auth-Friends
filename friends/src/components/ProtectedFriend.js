import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from './../Utils/axiosWithAuth';
import FriendCard from './FriendCard'

const ProtectedFriend = () => {
    const [friends, setFriends] = useState([])
    const [newFriend, setNewFriend] = useState({
        name: '',
        age: '',
        email:'',
    })
    
    const getFriends = () => {
            axiosWithAuth()
            .get('http://localhost:5000/api/friends')
            .then(res => {
                setFriends(res.data)
            })
            .catch(err => {
                console.log(err)
            })
        }

        useEffect(() => {
            getFriends()
        }, [])

        const onChange = e => {
            setNewFriend({
                ...newFriend, [e.target.name] : e.target.value
            });
        };

        const sendFriend = () => {
            axiosWithAuth()
                .post('http://localhost:5000/api/friends', newFriend)
                .then(res => {
                    setFriends(res.data)
                })
                .catch(err => {
                    console.log(err);
                });
        };

        const friendSubmit = e => {
            e.preventDefault();
            sendFriend()
            setNewFriend({
                name: '',
                age: '',
                email:'',
            })
            // setIsLoading(true)
        }

    return (
        <>
        <h1>See Your Friends</h1>
        <form onSubmit={friendSubmit}>
            <input
            type='text'
            name='name'
            value={newFriend.name}
            onChange={onChange}
            />
            <input
            type='text'
            name='age'
            value={newFriend.age}
            onChange={onChange}
            />
            <input
            type='text'
            name='email'
            value={newFriend.email}
            onChange={onChange}
            />
            <button type='submit'>Add Friend</button>
        </form>
        <div>
            {friends.map(friend => {
               return <FriendCard {...friend}/>
            })}
        </div>
        </>
    )
}

export default ProtectedFriend
