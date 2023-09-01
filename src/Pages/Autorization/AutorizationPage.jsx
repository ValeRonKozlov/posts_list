import React , {useContext}  from 'react';
import MyInput from '../../components/UI/Input/MyInput';
import MyButton from '../../components/UI/Button/MyButton';
import { AuthContext } from '../../context/context';

const AutorizationPage = () => {

	const { isAuth, setIsAuth } = useContext(AuthContext);

	const login = (e) => {
		e.preventDefault();
		setIsAuth(true);
		localStorage.setItem('auth', 'true');
	}
	return (
		<div>
			<h1>Please Login</h1>
			<form onSubmit={login}>
				<MyInput type="text" placeholder="Username" />
        <MyInput type="password" placeholder="Password" />
        <MyButton type="submit">Login</MyButton>
			</form>
		</div>
	);
};

export default AutorizationPage;