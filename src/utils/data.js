import ThreeDotsIcon from '../3 dot menu.svg';
import AddIcon from '../add.svg';
import BacklogIcon from '../Backlog.svg';
import CancelledIcon from '../Cancelled.svg';
import DoneIcon from '../Done.svg';
import HighPriorityIcon from '../Img - High Priority.svg';
import LowPriorityIcon from '../Img - Low Priority.svg';
import MediumPriorityIcon from '../Img - Medium Priority.svg';
import InProgressIcon from '../in-progress.svg';
import NoPriorityIcon from '../No-priority.svg';
import UrgentPriorityIcon from '../SVG - Urgent Priority colour.svg';
import ToDoIcon from '../To-do.svg';

const bgColors = ["#B57136", "#868728", "#4D9446", "#5F80E4"];

export const priorities = [
    { title: "no priority", color: "gray", icon: <img src={NoPriorityIcon} alt="No Priority" />, level: 0 },
    { title: "low", color: "lightgray", icon: <img src={LowPriorityIcon} alt="Low Priority" />, level: 1 },
    { title: "medium", color: "gray", icon: <img src={MediumPriorityIcon} alt="Medium Priority" />, level: 2 },
    { title: "high", color: "black", icon: <img src={HighPriorityIcon} alt="High Priority" />, level: 3 },
    { title: "urgent", color: "orange", icon: <img src={UrgentPriorityIcon} alt="Urgent Priority" />, level: 4 },
];

export const status = [
    { title: "backlog", color: "black", icon: <img src={BacklogIcon} alt="Backlog" /> },
    { title: "todo", color: "lightgrey", icon: <img src={ToDoIcon} alt="To-Do" /> },
    { title: "in progress", color: "#EBCB62", icon: <img src={InProgressIcon} alt="In Progress" /> },
    { title: "done", color: "#606ACB", icon: <img src={DoneIcon} alt="Done" /> },
    { title: "cancelled", color: "gray", icon: <img src={CancelledIcon} alt="Cancelled" /> },
];

export const statusIcons = {
    backlog: {
        color: "black",
        icon: <img src={BacklogIcon} alt="Backlog" />,
    },
    todo: {
        color: "lightgrey",
        icon: <img src={ToDoIcon} alt="To-Do" />,
    },
    "in progress": {
        color: "#EBCB62",
        icon: <img src={InProgressIcon} alt="In Progress" />,
    },
    done: {
        color: "#606ACB",
        icon: <img src={DoneIcon} alt="Done" />,
    },
    cancelled: {
        color: "gray",
        icon: <img src={CancelledIcon} alt="Cancelled" />,
    },
};

export const generateIntials = (name = '') => {
    if (!name) return ''; 
    return name
        .split(' ')
        .map(word => word.charAt(0).toUpperCase()) 
        .join('');
};

export const getRandomColor = () => bgColors[Math.floor(Math.random() * bgColors.length)];
