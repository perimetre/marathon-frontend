import { NextPage } from 'next';
import { LoginTemplate } from '../../components/Templates/Login';

const LoginContainer: NextPage = () => <LoginTemplate onSubmit={console.log} />;

export default LoginContainer;
