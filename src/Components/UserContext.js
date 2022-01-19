import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export function UserProvider(props) {
    const [users, setUsers] = useState([
        { id: 1, name: 'Salman', position: 'Front End Dev', salary: 28000 },
        { id: 2, name: 'Riad', position: 'Back End Dev', salary: 35000 },
        { id: 3, name: 'Sujon', position: 'Full Stack Dev', salary: 40000 },
        { id: 4, name: 'Tipu', position: 'Software Engineer', salary: 45000 },
        { id: 5, name: 'Dipu', position: 'QA Engineer', salary: 40000 },
    ]);
    return <UserContext.Provider value={[users, setUsers]}>{props.children}</UserContext.Provider>;
}
