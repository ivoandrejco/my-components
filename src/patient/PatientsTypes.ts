import {IPatient} from './Patient'

export enum PatientsActionTypes {
  GETALL = 'PATIENTS/GETALL',
  LOADING = 'PATIENTS/LOADING',
  ADD = 'PATIENTS/ADD'
}

export interface IPatientsAddAction {
  type: PatientsActionTypes.ADD;
  patient: IPatient;
}

export interface IPatientsGetAllAction {
  type: PatientsActionTypes.GETALL;
  patients: IPatient[];
}

export interface IPatientsLoadingAction {
  type: PatientsActionTypes.LOADING;
}

export type PatientsActions = IPatientsGetAllAction | IPatientsLoadingAction | IPatientsAddAction;

export interface IPatientsState {
  readonly patients: IPatient[];
  readonly patientsLoading: boolean;
  readonly activePatient?: IPatient;
}