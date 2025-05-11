'use client';

import { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { ToastContainer, Toast } from 'react-bootstrap';

type ToastType = 'success' | 'error' | 'info';

interface Toast {
    id: string;
    message: string;
    type: ToastType;
}

interface ToastContextType {
    addToast: (message: string, type?: ToastType) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
    const context = useContext(ToastContext);
    if (!context) throw new Error('useToast must be used within a ToastProvider');
    return context;
};

export const ToastProvider = ({ children }: { children: ReactNode }) => {
    const [toasts, setToasts] = useState<Toast[]>([]);

    const removeToast = (id: string) => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
    };

    const addToast = useCallback((message: string, type: ToastType = 'info') => {
        const id = crypto.randomUUID();
        setToasts((prev) => [...prev, { id, message, type }]);
        setTimeout(() => removeToast(id), 3000);
    }, []);

    return (
    <ToastContext.Provider value={{ addToast }}>
        {children}
        <ToastContainer
            position="bottom-end"
            className="p-3"
            style={{ zIndex: 9999 }}
        >
            {
                toasts.map((toast: Toast) => (
                    <Toast
                        key={toast.id}
                        onClose={() => removeToast(toast.id)}
                        bg={toast.type}
                        delay={4000}
                        autohide
                    >
                        <Toast.Header>
                            <strong className="me-auto">
                                {toast.type.charAt(0).toUpperCase() + toast.type.slice(1)}
                            </strong>
                        </Toast.Header>
                        <Toast.Body className="text-white">{toast.message}</Toast.Body>
                    </Toast>
                ))
            }
        </ToastContainer>
    </ToastContext.Provider>
    );
};
