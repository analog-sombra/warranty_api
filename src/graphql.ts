
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface CreateAuthInput {
    exampleField: number;
}

export interface UpdateAuthInput {
    exampleField?: Nullable<number>;
    id: number;
}

export interface Auth {
    exampleField: number;
}

export interface IMutation {
    createAuth(createAuthInput: CreateAuthInput): Auth | Promise<Auth>;
    removeAuth(id: number): Auth | Promise<Auth>;
    updateAuth(updateAuthInput: UpdateAuthInput): Auth | Promise<Auth>;
}

export interface IQuery {
    auth(id: number): Auth | Promise<Auth>;
}

type Nullable<T> = T | null;
