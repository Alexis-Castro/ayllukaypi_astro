
export const Alerta = ({ alerta }) => {
   return (
      <div className={`${alerta.error ? 'from-red-400 to-red-500' : 'from-cyan-400 to-cyan-ak'} bg-gradient-to-br text-center p-2 rounded-lg text-white font-bold text-sm uppercase`}>
         { alerta.msg }
      </div>
   )
}
