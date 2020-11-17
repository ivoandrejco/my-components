import * as React from 'react';
import {ISubmitResult, IValues, RapForm} from '../RapForm'
import { ISocFamHx, IPatient, Gender } from './Patient';

/*
export interface ISocFamHx {
  lives_with?: string;
  has_children?: number;
  children_comment?: string;
  smoker: boolean;
  smokes_a_day?: number;
  smoking_quit_ago?: number;
  etoh: boolean;
  etoh_a_week?: number;
  etoh_comment?: string;
  fhxBloodDisorders?: string;
  fhxMalignancies?: string;
  i_ADLS?: boolean;
  ADLs_comment?: string;
  travel?: boolean;
  travel_comment?: string;
  comment?: string;
}
*/

interface SocialHxFormProps {
  shx_fhx: ISocFamHx;
  handleOnSubmit: (values:IValues) => Promise<ISubmitResult>;
}

export const SocialHxForm:React.FC = (props) => {
  console.log(props)
  const onSubmit = async (vals:IValues):Promise<ISubmitResult> => {
    console.log("SocForm: " +vals["lives_with"])
    return {
      success: true
    }
  }
  return (
    <RapForm
      onSubmit={onSubmit}
      defaultValues={{
        lives_with:"",
        has_children: 0

      }}
    >
      
      <RapForm.Field type="text" name="lives_with" label="Who do you live with?"/>
      <RapForm.Field type="text" name="has_children" label="How many children do you have?"/>
      <div>Are children healthy?&nbsp;
      <RapForm.Field type="radio" name="children_healthy" value="1" label="Yes"/>
      <RapForm.Field type="radio" name="children_healthy" value="0" label="No"/>
      </div>
      <RapForm.Field type="text" name="children_comment" label="If not healthy, what medical problems do they have?"/>
      
      <div>Are you a smoker?&nbsp;
      <RapForm.Field type="radio" name="smoker" value="0" label="No"/>
      <RapForm.Field type="radio" name="smoker" value="1" label="Yes"/>
      </div>
      <RapForm.Field type="text" name="smokes_a_day" label="If yes, how many a day?"/>
      <RapForm.Field type="text" name="smoking_quit_ago" label="If previous smoker, how long ago did you quit?"/>
      
      <RapForm.Field type="textarea" name="comment" label="Other comments?"/>
    </RapForm>
  )  
}

interface IProps {
  patient: IPatient;
}

const SocialHx:React.FC<IProps> = (props) => {
  const {patient} = props;
  const shx_fhx = patient.shx_fhx;
  const person = patient.gender == Gender.MALE ? "he" : "she";
  const smoking = person + (shx_fhx.smoker ? " is a smoker" : " is a non-smoker")
  let drinking = person + (shx_fhx.etoh ? (shx_fhx.etoh_a_week ? " drinks " + shx_fhx.etoh_a_week + " standard drinks a week" : " drinks alcohol socially") : " does not drink alcohol");
  drinking += shx_fhx.etoh_comment? " - " + shx_fhx.etoh_comment : null;

  /*
  cancers / blood disorders / clots
  */
  const {fhxBloodDisorders, fhxMalignancies} = shx_fhx;
  
  let family_hx = " "
  if(fhxBloodDisorders && fhxMalignancies)
    family_hx += fhxBloodDisorders + ", " + fhxMalignancies
  else if(fhxMalignancies)
    family_hx += fhxMalignancies
  else if(fhxBloodDisorders)
    family_hx += fhxBloodDisorders
  else
    family_hx = person + " has no family history of blood disorders or malignancies"  
  
  const styleObj = {
    fontStyle: "italic",
    fontFamily: "Cambria"
  }
  const handleOnSubmit = async (vals:IValues) => {

    return (
      {success: true}
    )
  }

  return (
    <React.Fragment>
      <p style={styleObj}>lives with {shx_fhx.lives_with}, {smoking}, {drinking}, {family_hx}</p>
    </React.Fragment>
  )
}

export default SocialHx;