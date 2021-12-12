import * as yup from 'yup';

export const JobSchema = yup
  .object()
  .shape({
    firstName: yup.string().trim().required('Valid First Name is required'),
    lastName: yup.string().trim().required('Valid Last Name is required'),
    cityOrRegion: yup
      .string()
      .trim()
      .required('Valid City Or Region is required'),
    country: yup.string().trim().required('Valid Country is required'),
    lastEmployeer: yup
      .string()
      .trim()
      .required('Valid Last Employeer is required'),
    lastPosition: yup
      .string()
      .trim()
      .required('Valid Last Position is required'),
    email: yup
      .string()
      .trim()
      .required('Valid email is required')
      .matches(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        'Valid email is required',
      ),
  })
  .required();
