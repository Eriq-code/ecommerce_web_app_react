import react, {createContext, useContext, useReducer } from 'react'

export const stateContext = createContext();



export const stateProvider = ({reducer, insitial })