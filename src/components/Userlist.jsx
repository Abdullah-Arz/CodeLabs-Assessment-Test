import React from 'react';

const Userlist = (users) => {

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">User List</h2>
            <table className="min-w-full border border-gray-300">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="py-2 px-4 border">ID</th>
                        <th className="py-2 px-4 border">Name</th>
                        <th className="py-2 px-4 border">Age</th>
                        <th className="py-2 px-4 border">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users?.users?.map(user => (
                        <tr key={user.id} className="text-center">
                            <td className="py-2 px-4 border">{user.id}</td>
                            <td className="py-2 px-4 border">{user.name}</td>
                            <td className="py-2 px-4 border">{user.age}</td>
                            <td className="py-2 px-4 border">
                                <button
                                    onClick={() => users?.handleRemove(user?.id)}
                                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                                >
                                    Remove
                                </button>
                            </td>
                        </tr>
                    ))}
                    {users.length === 0 && (
                        <tr>
                            <td colSpan="4" className="py-4 text-gray-500">No users remaining.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Userlist;
