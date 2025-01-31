import { useState } from 'react';
import { Form, Input } from 'antd';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, Link } from 'react-router-dom';
import { signUp } from '../../lib/apiEcommerce';

const SignUpForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values) => {
    setIsLoading(true);
    try {
      const response = await signUp({
        name: values.fullName,
        email: values.email,
        password: values.password,
      });

      if (
        response?.message !== 'User created successfully' ||
        !response?.user?.id
      ) {
        toast.error('There was an error while signing up');
        return;
      }
      navigate('/sign-in');
      toast.success('You have successfully signed up');
    } catch (error) {
      const errorMessages = error.response?.data?.error;
      if (errorMessages?.email) {
        toast.warning(errorMessages.email[0]);
        return;
      }
      if (errorMessages?.name) {
        toast.warning(errorMessages.name[0]);
        return;
      }
      if (errorMessages?.password) {
        toast.warning(errorMessages.password[0]);
        return;
      }
      toast.error('There was an error while signing up');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Registro</h2>
      <Form
        name="signUp"
        className="w-100"
        onFinish={onFinish}
        layout="vertical"
      >
        {/* Nombre Completo */}
        <Form.Item
          label="Nombre Completo"
          name="fullName"
          rules={[
            { required: true, message: 'Por favor ingrese su nombre completo' },
          ]}
        >
          <Input size="large" placeholder="Ej. Juan Pérez" />
        </Form.Item>

        {/* Correo Electrónico */}
        <Form.Item
          label="Correo Electrónico"
          name="email"
          rules={[
            {
              required: true,
              message: 'Por favor ingrese su correo electrónico',
            },
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

        {/* Botón de Registro */}
        <button
          type="submit"
          className="btn btn-primary w-100"
          disabled={isLoading}
        >
          {isLoading ? 'Registrando...' : 'Registrarse'}
        </button>
      </Form>

      {/* Link a Iniciar Sesión */}
      <p className="text-center mt-3">
        ¿Ya tienes cuenta?{' '}
        <Link to="/sign-in" className="text-primary">
          Iniciar sesión
        </Link>
      </p>
    </div>
  );
};

export default SignUpForm;
