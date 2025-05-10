import React from 'react';

const UserForm = ({ AddList }) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!e.target.name.value && !e.target.age.value) return;

        AddList(e.target.name.value, e.target.age.value);

        e.target.reset();
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow max-w-xl mx-auto mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Add New User</h3>

            <div className="space-y-4">
                <input
                    required
                    type="text"
                    name='name'
                    placeholder="Name"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
                />

                <input
                    required
                    type="number"
                    name='age'
                    placeholder="Age"
                    className="w-full p-5 border border-gray-300 rounded-md focus:outline-none"
                />

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
                >
                    Add User
                </button>
            </div>
        </form>


    );
};

export default UserForm;
