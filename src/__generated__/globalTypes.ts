/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum UserRole {
	Client = "Client",
	Delivery = "Delivery",
	Host = "Host",
	Listener = "Listener",
	Owner = "Owner",
}

export interface CategoryInput {
	page?: number | null;
	slug: string;
}

export interface CreateAccountInput {
	email: string;
	password: string;
	role: UserRole;
}

export interface LoginInput {
	email: string;
	password: string;
}

export interface RestaurantInput {
	restaurantId: number;
}

export interface RestaurantsInput {
	page?: number | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
