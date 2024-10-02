import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Board from './components/Board/Board';
import { status, priorities } from './utils/data';

function App() {
    const [tickets, setTickets] = useState([]);
    const [users, setUsers] = useState([]);
    const defaultGroup = localStorage.getItem('selectedGroup') || 'status'; 
    const defaultOrder = localStorage.getItem('selectedOrder') || 'priority'; 

    const [group, setGroup] = useState(defaultGroup);
    const [order, setOrder] = useState(defaultOrder);

    const handleGroupChange = (selectedGroup) => {
        setGroup(selectedGroup);
        localStorage.setItem('selectedGroup', selectedGroup);
    };

    const handleOrderChange = (selectedOrder) => {
        setOrder(selectedOrder);
        localStorage.setItem('selectedOrder', selectedOrder);
    };

    useEffect(() => {
        fetchData();
    }, []); 

    const fetchData = async () => {
        try {
            const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
            const data = await response.json();
            setTickets(data.tickets || []); 
            setUsers(data.users || []); 
        } catch (error) {
            console.error('Unable to fetch data:', error); 
        }
    };

    return (
        <div className="App scroll-container">
            <Navbar 
                group={group} 
                order={order} 
                onGroupchange={handleGroupChange} 
                onOrderChange={handleOrderChange} 
            />
            <div className="boards_container">
                <div className="app_boards">
                    {group === 'status' && status.map((statusOption, index) => (
                        <Board 
                            key={index} 
                            order={order} 
                            data={statusOption} 
                            tickets={tickets} 
                            users={users} 
                            group={group} 
                        />
                    ))}
                    {group === 'user' && users
                        .sort((a, b) => a.name.localeCompare(b.name))
                        .map((user) => (
                            <Board 
                                key={user.id} 
                                order={order} 
                                data={user} 
                                tickets={tickets} 
                                users={users} 
                                group={group} 
                                userId={user.id} 
                            />
                        ))}
                    {group === 'priority' && priorities
                        .slice()
                        .sort((a, b) => b.level - a.level)
                        .map((priorityOption, index) => (
                            <Board 
                                key={index} 
                                order={order} 
                                data={priorityOption} 
                                level={priorityOption.level} 
                                tickets={tickets} 
                                users={users} 
                                group={group} 
                            />
                        ))}
                </div>
            </div>
        </div>
    );
}

export default App;
