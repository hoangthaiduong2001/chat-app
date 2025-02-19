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
