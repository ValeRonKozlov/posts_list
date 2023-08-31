import React from 'react';
import MyInput from '../../components/UI/Input/MyInput';
import MyButton from '../../components/UI/Button/MyButton';

const AutorizationPage = () => {
	return (
		<div>
			<h1>Please Login</h1>
			<form>
				<MyInput type="text" placeholder="Username" />
        <MyInput type="password" placeholder="Password" />
        <MyButton type="submit">Login</MyButton>
			</form>
		</div>
	);
};

export default AutorizationPage;