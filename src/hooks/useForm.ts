import { useState } from 'react';

export const useForm = (initialForm = {}) => {

   const [formState, setFormState] = useState(initialForm);

   const onInputChange = ({ target }) => {
      const { name, value } = target;
      setFormState({
         ...formState,
         [name]: value
      });
   }

   const onDateChange = (event: Date, picker: string) => {
      setFormState({
         ...formState,
         [picker]: event
      })
   }

   const onResetForm = () => {
      setFormState(initialForm);
   }

   return {
      ...formState,
      formState,
      onInputChange,
      onDateChange,
      onResetForm,
   }
}
