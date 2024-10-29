import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const alerta = withReactContent(Swal)


export const boletin = async () => {
    const { value: email } = await alerta.fire({
        title: "¡Suscribete a nuestro Newsletter!",
        input: "email",
        // inputLabel: "Your email address",
        inputPlaceholder: "Ejemplo: pedro@gmail.com",
        confirmButtonText: "Suscribirse",
        validationMessage: "Introduce un correo válido",
        customClass: {
            confirmButton: 'bg-orange-500 rounded-full',
            popup: 'rounded-2xl py-12', // Clase personalizada para el popup
        },

    });




    if (email) {

        alerta.fire({

            icon: "success",
            title: "¡Gracias por suscribirte!",
            html: `Correo: ${email}`,
            showConfirmButton: false,

            timerProgressBar: true,
            timer: 3000,



        })
    }
}


