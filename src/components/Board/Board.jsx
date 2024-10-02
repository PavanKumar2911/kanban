import './Board.css';
import { generateIntials, getRandomColor, priorities, statusIcons } from '../../utils/data';
import Card from '../Card/Card';
import UserIcon from '../UserIcon/UserIcon';
import addIcon from '../../add.svg';
import optionsIcon from '../../3 dot menu.svg';

const Board = (props) => {
    const { tickets, users, group, level, userId, order, data, customTitle } = props;

    
    const filterTickets = (tickets) => {
        if (group === 'status') {
            return tickets.filter(ticket => ticket.status.toLowerCase() === data.title.toLowerCase());
        } else if (group === 'priority') {
            return tickets.filter(ticket => priorities[ticket.priority].level === level);
        } else if (group === 'user') {
            return tickets.filter(ticket => ticket.userId === userId);
        }
        return tickets;
    };

    let filteredTickets = filterTickets(tickets);

    
    const sortTickets = (tickets) => {
        return tickets.slice().sort((a, b) => {
            if (order === 'priority') {
                return b.priority - a.priority;
            } else if (order === 'date') {
                return new Date(b.date) - new Date(a.date);  
            }
            return a.title.localeCompare(b.title);  
        });
    };

    filteredTickets = sortTickets(filteredTickets);

    
    if (group === 'user') {
        return (
            <div className='board'>
                <div className='board_top'>
                    <div className="board_top_name">
                        <span>
                            <UserIcon initials={generateIntials(data?.name)} available={data?.available} bgColor={getRandomColor()} />
                        </span>
                        <p>{data?.name}</p>
                        <span>{filteredTickets.length}</span>
                    </div>
                    <div className="board_top_options">
                        <img src={addIcon} alt="Add" style={{ cursor: 'pointer', width: '20px', height: '20px' }} />
                        <img src={optionsIcon} alt="Options" style={{ cursor: 'pointer', width: '20px', height: '20px' }} />
                    </div>
                </div>
                <div className="board_container">
                    {
                        filteredTickets.map((ticket) => (
                            <Card
                                ticket={ticket}
                                key={ticket.id}
                                icon={priorities[ticket.priority].icon}
                                group={group}
                                statusIcon={statusIcons[ticket?.status.toLowerCase()].icon}
                                statusColor={statusIcons[ticket?.status.toLowerCase()].color}
                                bgColor={getRandomColor()}
                            />
                        ))
                    }
                </div>
            </div>
        );
    }

    
    return (
        <div className='board'>
            <div className='board_top'>
                <div className="board_top_name">
                    <span style={{ color: data.color }}>{data.icon}</span>
                    <p>{customTitle || data.title} </p>  
                    <span>{filteredTickets.length}</span>
                </div>
                <div className="board_top_options">
                    <img src={addIcon} alt="Add" style={{ cursor: 'pointer', width: '20px', height: '20px' }} />
                    <img src={optionsIcon} alt="Options" style={{ cursor: 'pointer', width: '20px', height: '20px' }} />
                </div>
            </div>
            <div className="board_container">
                {
                    filteredTickets.map((ticket) => {
                        const user = users?.find(user => user.id === ticket.userId);
                        return (
                            <Card
                                ticket={ticket}
                                key={ticket.id}
                                user={user}
                                group={group}
                                icon={priorities[ticket.priority].icon}
                                statusIcon={statusIcons[ticket?.status.toLowerCase()].icon}
                                statusColor={statusIcons[ticket?.status.toLowerCase()].color}
                                bgColor={getRandomColor()}
                            />
                        );
                    })
                }
            </div>
        </div>
    );
};

export default Board;
