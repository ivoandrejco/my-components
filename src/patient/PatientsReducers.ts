import {Reducer} from 'redux'
import { patients } from './PatientsData'
import {IPatientsState,PatientsActions, PatientsActionTypes} from './PatientsTypes'

const initialPatientsState: IPatientsState = {
  patients: [],
  patientsLoading: false,
  
}

export const patientsReducer: Reducer<IPatientsState,PatientsActions> = (state = initialPatientsState, action) => {
  console.log("inside reducers ...")
  switch(action.type) {
    case PatientsActionTypes.LOADING:
      return {
        ...state,
        patientsLoading: true
      }
    case PatientsActionTypes.GETALL:
      return {
        ...state,
        patients: action.patients,
        patientsLoading: false
      }
    case PatientsActionTypes.ADD:
      let patients = state.patients;
      console.log("Reduces ADD: " + patients + "patient's name" + action.patient.fname)
      patients.push(action.patient)  
      console.log(patients)
      return {
        ...state,
        patients: patients,
        patientsLoading: false
      }
  }
  return state;
}