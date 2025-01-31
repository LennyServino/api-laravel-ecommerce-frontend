import SignUpForm from '../components/auth/SignUpForm';
import { MotionDiv } from '../components/content/MotionDiv';

const SignUpPage = () => {
  return (
    <MotionDiv className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div
        className="card shadow p-4"
        style={{ width: '100%', maxWidth: '400px' }}
      >
        <SignUpForm />
      </div>
    </MotionDiv>
  );
};

export default SignUpPage;
