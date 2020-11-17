import {ActionCreator, AnyAction, Dispatch} from 'redux'
import {ThunkAction} from 'redux-thunk'
import {getPatients as getPatientsFromAPI} from './PatientsData'
import {IPatientsGetAllAction, IPatientsLoadingAction, IPatientsAddAction, IPatientsState, PatientsActionTypes} from './PatientsTypes'
import {IPatient} from './Patient'


const loading:ActionCreator<IPatientsLoadingAction> = () => {
  return {
    type: PatientsActionTypes.LOADING
  }
}

export const addPatient: ActionCreator<ThunkAction<Promise<AnyAction>,IPatientsState, null, IPatientsAddAction>> = (p:IPatient) => {
  
  return async (dispatch:Dispatch) => {
    const pat = p;console.log("adding patient: ... " + p.fname)
    return dispatch({
      patient: p,
      type: PatientsActionTypes.ADD
    })
  }
}
export const getPatients: ActionCreator<ThunkAction<Promise<AnyAction>, IPatientsState,null,IPatientsGetAllAction>> = () => {
  return async (dispatch:Dispatch) => {
    dispatch(loading())
    
    const patients = await getPatientsFromAPI()
    return dispatch({
      patients,
      type: PatientsActionTypes.GETALL
    })
  }
} 