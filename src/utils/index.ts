import { toast } from 'react-toastify';

type TypeToast = 'error' | 'success';

export const showToast = (message: string, type: TypeToast) => {
  toast.dark(message, {
    position: 'bottom-right',
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: 0,
    style: {
      backgroundColor: type === 'success' ? 'green' : 'red',
      color: 'white',
    },
  });
};

export const convertTimestamp = (timestamp: number) => {
  const date = new Date(timestamp);
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
};
