import React from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { gql, useMutation } from "@apollo/client";
import { FormError } from "../components/form-error";
import {
	loginMutation,
	loginMutationVariables,
} from "../__generated__/loginMutation";
import nuberLogo from "../images/logo.svg";
import podcastLogo from "../images/podcasts.svg";
import { Button } from "../components/button";
import { Link } from "react-router-dom";
import { authTokenVar, isLoggedInVar } from "../apollo";
import { LOCALSTORAGE_TOKEN } from "../constants";
export const LOGIN_MUTATION = gql`
	mutation loginMutation($loginInput: LoginInput!) {
		login(input: $loginInput) {
			ok
			token
			error
		}
	}
`;

interface ILoginForm {
	email: string;
	password: string;
}

// 우버이츠 로그인
export const Login = () => {
	const {
		register,
		getValues,
		errors,
		handleSubmit,
		formState,
	} = useForm<ILoginForm>({
		mode: "onChange",
	});
	const onCompleted = (data: loginMutation) => {
		const {
			login: { ok, token },
		} = data;
		if (ok && token) {
			localStorage.setItem(LOCALSTORAGE_TOKEN, token);
			authTokenVar(token);
			isLoggedInVar(true);
		}
	};
	const [loginMutation, { data: loginMutationResult, loading }] = useMutation<
		loginMutation,
		loginMutationVariables
	>(LOGIN_MUTATION, {
		onCompleted,
	});
	const onSubmit = () => {
		if (!loading) {
			const { email, password } = getValues();
			loginMutation({
				variables: {
					loginInput: {
						email,
						password,
					},
				},
			});
		}
	};
	return (
		// 우버
		// <div className="h-screen flex items-center flex-col mt-10 lg:mt-28">
		// 	<Helmet>
		// 		<title>Login | Nuber Eats</title>
		// 	</Helmet>
		// 	<div className="w-full max-w-screen-sm flex flex-col px-5 items-center">
		// 		<img src={nuberLogo} className="w-52 mb-10" alt="Nuber Eats" />
		// 		<h4 className="w-full font-medium text-left text-3xl mb-5">
		// 			Welcome back
		// 		</h4>
		// 		<form
		// 			onSubmit={handleSubmit(onSubmit)}
		// 			className="grid gap-3 mt-5 w-full mb-5"
		// 		>
		// 			<input
		// 				ref={register({
		// 					required: "Email is required",
		// 					pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
		// 				})}
		// 				name="email"
		// 				required
		// 				type="email"
		// 				placeholder="Email"
		// 				className="input"
		// 			/>
		// 			{errors.email?.type === "pattern" && (
		// 				<FormError
		// 					errorMessage={"Please enter a valid email"}
		// 				/>
		// 			)}
		// 			{errors.email?.message && (
		// 				<FormError errorMessage={errors.email?.message} />
		// 			)}
		// 			<input
		// 				ref={register({ required: "Password is required" })}
		// 				required
		// 				name="password"
		// 				type="password"
		// 				placeholder="Password"
		// 				className="input"
		// 			/>
		// 			{errors.password?.message && (
		// 				<FormError errorMessage={errors.password?.message} />
		// 			)}
		// 			<Button
		// 				canClick={formState.isValid}
		// 				loading={loading}
		// 				actionText={"Log in"}
		// 			/>
		// 			{loginMutationResult?.login.error && (
		// 				<FormError
		// 					errorMessage={loginMutationResult.login.error}
		// 				/>
		// 			)}
		// 		</form>
		// <div>
		// 	New to Nuber?{" "}
		// 	<Link
		// 		to="/create-account"
		// 		className="text-lime-600 hover:underline"
		// 	>
		// 		Create an Account
		// 	</Link>
		// </div>
		// 	</div>
		// </div>
		<div className="bg-gradient-to-b from-purple-500 to-pink-300">
			<Helmet>
				<title>Login | Podcast</title>
			</Helmet>
			<div className="h-screen flex flex-col justify-center items-center">
				<img src={podcastLogo} className="w-52 mb-5" alt="profile" />
				<h1 className="italic font-medium text-2xl mb-6 tracking-tight">
					Welcome Podcast
				</h1>
				<form
					className="grid gap-3 w-full max-w-xs"
					onSubmit={handleSubmit(onSubmit)}
				>
					<input
						className="shadow-xl text-white placeholder-gray-500 bg-black rounded-lg border-gray-700 border focus:outline-none px-5 py-3 focus:border-white transition-colors duration-500"
						ref={register({
							required: "Email is required",
							pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
						})}
						name="email"
						type="email"
						placeholder="Email"
						required
					/>
					{errors.email?.message && (
						<FormError
							errorMessage={"Please enter a valid email"}
						/>
					)}
					{errors.email?.type === "pattern" && (
						<FormError errorMessage="Please enter a valid email" />
					)}
					<input
						className=" shadow-xl text-white placeholder-gray-500 bg-black rounded-lg border-gray-700 border focus:outline-none px-5 py-3 focus:border-white transition-colors duration-500"
						ref={register({
							required: "Password is required",
						})}
						name="password"
						type="password"
						placeholder="Password"
						required
					/>
					{errors.password?.message && (
						<FormError errorMessage={errors.password?.message} />
					)}
					<Button
						canClick={formState.isValid}
						loading={loading}
						actionText={"Log in"}
					/>
					{loginMutationResult?.login.error && (
						<FormError
							errorMessage={loginMutationResult.login.error}
						/>
					)}
				</form>
				<div className="mt-3">
					podcaset new?{" "}
					<Link
						to="/create-account"
						className="text-blue-600 hover:underline"
					>
						Create an Account
					</Link>
				</div>
			</div>
		</div>
	);
};
