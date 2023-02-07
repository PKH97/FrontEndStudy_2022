import React from "react";

function User({ user }) {
    return(
        <div>
            <b>{user.username}</b><span>{user.email}</span>
        </div>
    );
}

function UserList2({ users }) {
    return(
        <div>
            {/* <div><User user={users[0]} /></div>
            <div><User user={users[1]} /></div>
            <div><User user={users[2]} /></div>
            <div><User user={users[3]} /></div>
            <div><User user={users[4]} /></div> */}
            {users.map((user, index) => (
                <User user={user} key={index} />
            ))}
        </div>
    );
}

export default UserList2;