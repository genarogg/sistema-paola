import React, { createContext, useReducer, useEffect, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { URL_BACKEND } from '../../env';

interface AuthState {
    isAuthenticated: boolean;
    token: string | null;
}

interface AuthAction {
    type: 'LOGIN' | 'LOGOUT';
    payload?: string;
}

const initialState: AuthState = {
    isAuthenticated: false,
    token: null,
};

const AuthContext = createContext<{
    state: AuthState;
    dispatch: React.Dispatch<AuthAction>;
}>({
    state: initialState,
    dispatch: () => null,
});

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                isAuthenticated: true,
                token: action.payload || null,
            };
        case 'LOGOUT':
            return {
                ...state,
                isAuthenticated: false,
                token: null,
            };
        default:
            return state;
    }
};

interface AuthProviderProps {
    children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (!token) {
            navigate('/'); 
            return dispatch({ type: 'LOGOUT' });

        }
            // Verifica el token con el backend
            fetch(`${URL_BACKEND}/auth/obtenerUsuario`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
                .then(response => response.json())
                .then(data => {
                  
                    if (data.type === 'success') {
                        dispatch({ type: 'LOGIN', payload: token });
                        navigate('/dashboard')
                        
                    } else {
                        localStorage.removeItem('token');
                        dispatch({ type: 'LOGOUT' });
                        navigate('/'); 
                    }
                })
                .catch(() => {
                    localStorage.removeItem('token');
                    dispatch({ type: 'LOGOUT' });
                });

    }, []);

    return (
        <AuthContext.Provider value={{ state, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };