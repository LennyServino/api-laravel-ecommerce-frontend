import SignInForm from '../components/auth/SignInForm';
import { MotionDiv } from '../components/content/MotionDiv';

const SignInPage = () => {
  return (
    <MotionDiv className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div
        className="card shadow p-4"
        style={{ width: '100%', maxWidth: '400px' }}
      >
        <SignInForm />
      </div>
    </MotionDiv>
  );
};

export default SignInPage;
