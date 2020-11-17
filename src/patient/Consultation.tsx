import * as React from 'react';


interface IProps {
  issue?: string;
}

const InitialConsultation:React.FC<IProps> = (props) => {
  const {issue} = props;

  return (
    <React.Fragment>
      <h2>Initial consultation</h2>
    </React.Fragment>   
  )
}

export default InitialConsultation;