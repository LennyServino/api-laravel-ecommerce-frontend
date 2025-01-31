import { useState } from 'react';
import { Form, Input } from 'antd';
import { toast } from 'react-toastify';
import { useNavigate, Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const SignInForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const onFinish = async (values) => {
    setIsLoading(true);
    try {
      const result = await login(values.email, values.password);

      if (result.success) {
        toast.success(result.message || 'Inicio de sesión exitoso.');
        navigate('/products');
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      console.error(error);
      toast.error('Hubo un error al iniciar sesión.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Iniciar Sesión</h2>
      <Form
        name="signIn"
        className="w-100"
        onFinish={onFinish}
        layout="vertical"
      >
        {/* Correo Electrónico */}
        <Form.Item
          label="Correo Electrónico"
          name="email"
          rules={[
            { required: true, message: 'Ingrese su correo electrónico' },
            { type: 'email', message: 'Ingrese un correo válido' },
          ]}
        >
          <Input size="large" placeholder="Ej. usuario@email.com" />
        </Form.Item>

        {/* Contraseña */}
        <Form.Item
          label="Contraseña"
          name="password"
          rules={[
            { required: true, message: 'Ingrese su contraseña' },
            {
              min: 6,
              message: 'La contraseña debe tener al menos 6 caracteres',
            },
          ]}
        >
          <Input.Password size="large" placeholder="********" />
        </Form.Item>

        {/* Botón de Inicio de Sesión */}
        <button
          type="submit"
          className="btn btn-primary w-100"
          disabled={isLoading}
        >
          {isLoading ? 'Iniciando...' : 'Iniciar Sesión'}
        </button>
      </Form>

      {/* Link a Registro */}
      <p className="text-center mt-3">
        ¿No tienes cuenta?{' '}
        <Link to="/sign-up" className="text-primary">
          Regístrate
        </Link>
      </p>
    </div>
  );
};

export default SignInForm;
