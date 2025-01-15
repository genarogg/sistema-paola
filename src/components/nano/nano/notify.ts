import { toast, ToastOptions, Flip } from 'react-toastify';

interface ToastProps {
  type: 'success' | 'error' | 'warning';
  message: string;
  config?: Partial<ToastOptions>; // Permitir configuraciones parciales
}

const defaultToastConfig: ToastOptions = {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  transition: Flip,
};

const notify = ({ type, message, config = {} }: ToastProps) => {
  const finalConfig = { ...defaultToastConfig, ...config };

  switch (type) {
    case 'success':
      toast.success(message, finalConfig);
      break;
    case 'error':
      toast.error(message, finalConfig);
      break;
    default:
      break;
  }
};

export default notify;