import React from 'react'

export enum ConsultationType {
  INITIAL,
  SUBSEQUENT,
  NONE
}

export enum Gender {
  MALE = "Male",
  FEMALE = "Female"
}

interface IConsultation {
  id: string;
  pid: string; // patient id
  cType: ConsultationType;
  code: number;
  created: Date;
  note: string;
  hidden: boolean;
  author: string;
}


interface IMedication {
  id: string;
  pid: string; // medicationlist id
  added: Date;
  discontinued?: Date;
  name: string;
  dose: string;
  frequency: string;
  comment: string;
}

interface IComorbidity {
  id: string;
  pid: string;
  name: string;
  comment: string;
}

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
/*********************
 * 
 */
interface MedicationList {
  id: string; // list identifier
  pid: string; // patient id
  reviewed: Date;  // date when reviewed / updated
  hidden: boolean; // hide rather than delete
  author: string; // author id
}

interface IAllergy {
  id: string;
  pid: string;
  drug: string;
  reaction: string;
}
 interface ILetter {
   id: string;
   pid: string;
   type: string; // initial / referral / progress / other
 }

 interface IResult {
   id: string;
   pid: string;
   created: Date;
   name: string;
   content: string;
   upload: string;
 }

interface PhraseTemplate {
  id: string;
  condition: string;
  content: string;
}



export interface IPatient {
  id: string;
  fname: string;
  lname: string;
  gender: Gender;
  dob: string;
  tasks?: string;
  medications?: IMedication[];
  comorbidities?: IComorbidity[];
  allergies?: IAllergy[];
  consultations?: IConsultation[];
  shx_fhx: ISocFamHx; // social and family history
  
};

