
import { toast } from 'react-toastify';

export const notify = (type, massage) => {
    switch (type) {
        case "info":
            toast.info(massage, {
                theme: "dark"
            });
            break;
        case "success":
            toast.success(massage, {
                theme: "dark"
            });
            break;
        case "warn":
            toast.warn(massage, {
                theme: "dark"
            });
            break;
        case "error":
            toast.error(massage, {
                theme: "dark"
            });
            break;
        default:
            toast(massage, {
                theme: "dark"
            });
            break;
    }
}