import {IPatient, Gender} from './Patient'


export const patients = [
  {
    id:"p1", 
    fname: "Ivo", 
    lname: "Andrejco", 
    gender: Gender.MALE, 
    dob: "10/08/1974", 
    shx_fhx: {
      lives_with: "family", 
      smoker: false, 
      etoh: false, 
      etoh_a_week: 3,
      etoh_comment: "quit 2 years ago, previous heavy drinker",
      fhxBloodDisorders:"",
      fhxMalignancies:""
    }
  },
 // {id:"p2", fname: "Martina", lname: "Andrejco", gender: Gender.FEMALE, dob: "22/10/72", shx_fhx: "lives with husband"},
 // {id:"p3", fname: "Sophie Isabel", lname: "Andrejco", gender: Gender.FEMALE, dob: "30/10/2008", shx_fhx: "lives with parents"},
 // {id:"p4", fname: "Etienne Elliot", lname: "Andrejco", gender: Gender.MALE, dob: "01/10/2011", shx_fhx: "lives with parents"}
]

export const getPatients = async (): Promise<IPatient[]> => {
  await setTimeout(() => console.log("waiting before sending patients"),1000)
  return patients 
}

/*
export const addPatient = async (pt:IPatient): Promise<boolean> => {
  patients.push(pt)
  await setTimeout( () => console.log("adding pt"), 1000)
  return true
}
*/
