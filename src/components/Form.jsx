import { useState } from 'react';
import DatePicker, { registerLocale } from "react-datepicker";
import { landingApi } from '../api/landingApi';
import { useForm } from '../hooks/useForm'
import { Alerta } from './Alerta'
import es from 'date-fns/locale/es';
import { setHours, format, setMinutes, addDays } from 'date-fns';

import "react-datepicker/dist/react-datepicker.css";
registerLocale('es', es)

const formData = {
   nombres: "",
   email: "",
   telefono: "",
   fecha: "",
   hora: "",
}

// const isWeekday = (date: Date) => {
//    const day = getDay(date);
//    return day !== 0 && day !== 7;
// };

export const Form = () => {

   const { formState, nombres, email, telefono, hora, onInputChange, onDateChange } = useForm(formData)
   const [enviando, setEnviando] = useState(false)
   const [isChecked, setIsChecked] = useState(false);
   const [alerta, setAlerta] = useState({})

   const todayTomorrow = () => {
      const horaActual = format(new Date(), 'HH:mm:ss')
      const horaSeleccionada = format(hora, 'HH:mm:ss')

      // console.log(hora);
      console.log(horaActual);
      console.log(horaSeleccionada);

      if (horaActual <= horaSeleccionada) {
         const fecha = format(new Date(), "yyyy-MM-dd")

         return `${fecha} ${horaSeleccionada}`
      }
      else {
         const fecha = format(addDays(new Date(), 1), "yyyy-MM-dd")

         return `${fecha} ${horaSeleccionada}`
      }
   }

   const handleSubmit = async (e) => {
      e.preventDefault()
      // setEnviando(true)

      if ([nombres, email, telefono, hora].includes('') || !isChecked) {
         setAlerta({
            msg: 'Todos los campos son obligatorios',
            error: true
         });
         return
      }

      setAlerta({})

      // Crear contacto API
      try {

         // const fecha2 = format(fecha, "yyyy-MM-dd")
         // const hora2 = format(hora, 'HH:mm:ss')

         const { data } = await landingApi.post('/contacto', {
            nombres, telefono1: telefono, email
         })

         const resp = await landingApi.post('/actividad', {
            "fechahoravto": todayTomorrow(),
            "contacto_idcontacto": data._id
         })

         console.log(formState);

         console.log(data);
         console.log(resp.data);

      } catch (error) {
         console.error(error?.response?.data);

      }
   }

   // console.log(getEnvVariables());

   return (
      <form
         onSubmit={handleSubmit}
         className="space-y-5"
      >
         {alerta.msg && <Alerta alerta={alerta} />}

         <div className="">
            <label htmlFor="nombres" className="block font-semibold mb-1 text-sm text-gray-200">Nombres:</label>

            <input
               type="text"
               placeholder="Nombres"
               className="rounded-lg border-transparent flex-1 appearance-none border-2 w-full py-2.5 px-3 bg-[#010b15] border-cyan-900 transition text-gray-200 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-4 focus:ring-cyan-700 focus:border-transparent"
               name="nombres"
               value={nombres}
               onChange={onInputChange}

            />
         </div>

         <div className="">

            <label htmlFor="telefono" className="block font-semibold mb-1 text-sm text-gray-200">Celular:</label>

            <input
               type="tel"
               placeholder="Celular"
               className="rounded-lg border-transparent flex-1 appearance-none border-2 w-full py-2.5 px-3 bg-[#010b15] border-cyan-900 transition text-gray-200 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-4 focus:ring-cyan-700 focus:border-transparent"
               name="telefono"
               value={telefono}
               onChange={onInputChange}

            />
            {/* <input type="hidden" className="number" name="celular" /> */}
         </div>

         <div className="">
            <label htmlFor="email" className="block font-semibold mb-1 text-sm text-gray-200">Correo Electrónico:</label>

            <input
               type="email"
               className="rounded-lg border-transparent flex-1 appearance-none border-2 w-full py-2.5 px-3 bg-[#010b15] border-cyan-900 transition text-gray-200 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-4 focus:ring-cyan-700 focus:border-transparent"
               name="email"
               value={email}
               onChange={onInputChange}
               placeholder="Correo"

            />
         </div>

         {/* <div className="">
            <label htmlFor="fecha" className="block font-semibold mb-1 text-sm text-gray-200">Fecha:</label>

            <DatePicker
               locale={"es"}
               className="rounded-lg border-transparent flex-1 appearance-none border-2 w-full py-2.5 px-3 bg-[#010b15] border-cyan-900 transition text-gray-200 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-4 focus:ring-cyan-700 focus:border-transparent"
               selected={fecha}
               onChange={ (date) => onDateChange(date, 'fecha') }
               dateFormat="dd/MM/yyyy"
               minDate={new Date()}
               filterDate={isWeekday}
               placeholderText={"Selecciona Fecha para llamarlo"}
               
            />
         </div> */}

         <div className="">
            <label htmlFor="hora" className="block font-semibold mb-1 text-sm text-gray-200">Hora:</label>

            <DatePicker
               // locale={"es"}
               className="rounded-lg border-transparent flex-1 appearance-none border-2 w-full py-2.5 px-3 bg-[#010b15] border-cyan-900 transition text-gray-200 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-4 focus:ring-cyan-700 focus:border-transparent"
               selected={hora}
               onChange={(date) => onDateChange(date, 'hora')}
               minTime={setHours(setMinutes(new Date(), 0), 9)}
               maxTime={setHours(setMinutes(new Date(), 30), 18)}
               // excludeTimes={setHours(setMinutes(new Date(), 30), 17)}
               showTimeSelect
               showTimeSelectOnly
               timeIntervals={30}
               timeCaption="Hora"
               dateFormat="h:mm aa"
               placeholderText={"Selecciona Hora para llamarlo"}
               onKeyDown={e => e.preventDefault()}

            />
         </div>

         <div className="">
            <div className="lg:text-sm">
               <input
                  id="terminos"
                  type="checkbox"
                  className={"w-4 h-4 transition accent-cyan-ak text-cyan-ak rounded ring-offset-gray-800  border-b-2 bg-white focus:ring-cyan-ak focus:ring-2"}
                  checked={isChecked}
                  onChange={() => setIsChecked(!isChecked)}
               />
               <label htmlFor="terminos" className="ml-2 font-medium mr-1 text-sm text-gray-200">
                  He leído y acepto los {" "}
                  <a
                     href="#"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="hover:underline cursor-pointer text-cyan-ak font-bold js-modal-trigger"
                  >
                     Términos y Condiciones {" "}
                  </a>
                  y las {" "}
                  <a
                     href="#"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="hover:underline cursor-pointer text-cyan-ak font-bold js-modal-trigger"
                  >
                     Políticas de Privacidad
                  </a>
               </label>
            </div>
         </div>

         <div>
            <button
               type="submit"
               className={`w-full bg-gradient-to-r text-azul bg-cyan-ak rounded-full py-2.5 px-3 transition-transform duration-200 hover:scale-105 text-sm font-bold shadow-xl flex items-center justify-center ${enviando ? "opacity-70 cursor-not-allowed" : ''}`}
               id="enviar-form"
               disabled={enviando && true}
            >
               <svg
                  role="status"
                  className={`mr-3 w-5 h-5 text-azul animate-spin ${enviando ? "" : "hidden"}`}
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <path
                     d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                     fill="#fff"
                  />
                  <path
                     d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                     fill="currentColor"
                  />
               </svg>
               Registrar Datos
            </button>
         </div>
      </form>
   )
}

