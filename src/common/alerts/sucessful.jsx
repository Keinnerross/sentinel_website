import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const alerta = withReactContent(Swal)



export const sucessful = (isSucessful) => {
    isSucessful ?

        alerta.fire({
            icon: "success",
            title: "Solicitud enviada",
            timerProgressBar: true,
            showConfirmButton: false,
            timer: 1500,
            customClass: {
                popup: 'rounded-2xl py-12', // Clase personalizada para el popup
            },
        })

        :
        alerta.fire({
            title: 'Enviando...',
            html: 'Por favor, espera un momento.',
            didOpen: () => {
                alerta.showLoading();
            },
            allowOutsideClick: false,
            customClass: {
                popup: 'rounded-2xl py-12', // Clase personalizada para el popup
            },
        })


}


