import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../redux/AuthContext';
import { URL_BACKEND } from '../../../../../env';
import { notify } from '../../../../nano';

const BtnSubmitBasic = ({
  children,
  className = "",
  id = "",
  formData,
  endpoint,
  push = "/"
}: any) => {
  const [loading, setLoading] = useState(false);
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  let token = "";

  const handleSubmit = async () => {
    const data = {
      ...formData.current,
      token,
    };

    if (data.confirmPassword) {
      if (data.password !== data.confirmPassword) {
        notify({ type: "error", message: "Las contraseñas no coinciden" });
        setLoading(false);
        return;
      }
    }

    fetch(`${URL_BACKEND}/auth${endpoint}`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          notify({ type: "error", message: data.message });
          return;
        }

        console.log(data);

  

        localStorage.setItem("token", data.token);
        dispatch({ type: 'LOGIN', payload: data.token });
        notify({ type: "success", message: data.message });

        navigate('/dashboard');
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };

  return (
    <div className={`btn-submit-basic ${className}`} id={id}>
      <button
        disabled={loading}
        onClick={() => {
          setLoading(true);
          handleSubmit();
        }}>
        {children}
      </button>
    </div>
  );
};

export default BtnSubmitBasic;