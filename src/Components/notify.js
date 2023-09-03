import { toast } from 'react-toastify';

export const notify = (type, message) => {
    switch (type) {
        case "info":
            toast.info(message, { className: 'bg-blue-500 text-white' });
            break;
        case "success":
            toast.success(message, { className: 'bg-green-500 text-white' });
            break;
        case "warn":
            toast.warn(message, { className: 'bg-yellow-500 text-white' });
            break;
        case "error":
            toast.error(message, { className: 'bg-red-500 text-white' });
            break;
        default:
            toast(message);
            break;
    }
}
