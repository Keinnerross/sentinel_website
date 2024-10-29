// Images

import transporte from "../../../assets/images/services/transporte.jpg"
import retail from "../../../assets/images/services/retail.jpg"
import particular from "../../../assets/images/services/particular.jpg"
import personal from "../../../assets/images/services/personal.jpg"
import autobus from "../../../assets/images/services/autobus.png"
import mineria from "../../../assets/images/services/mineria.jpg"

//Icons
import { FaTruck, FaCarSide, FaBusAlt, FaTruckMoving, FaUserShield } from "react-icons/fa";
import { GiMineTruck } from "react-icons/gi";







export const services = [
    {
        title: "Gps para Retail",
        description: "Asegura el monitoreo de tu carga y la optimización de tus entregas. Supervisa la cadena de frío, gestiona rutas eficientes y mantén la vigilancia con video en tiempo real.",
        urlImg: retail,
        icon: FaTruck
    },
    {
        title: "Gps Transporte de pasajeros",
        description: "Supervisa los tiempos de salida desde el terminal y la llegada al destino. ¿Requieres controlar las paradas?, ¿Monitorear las velocidades del trayecto?, ¿Evaluar el estilo de conducción de tus choferes?",
        urlImg: autobus,
        icon: FaBusAlt
    }, {
        title: "GPS Vehículos Particulares",
        description: "Instala un sistema de GPS en tu vehículo  para rastrearlo en tiempo real y asegurar su ubicación en caso de robo. Además, podrás activar un corta corriente de manera remota.",
        urlImg: particular,
        icon: FaCarSide
    }, {
        title: "GPS para la Minería",
        description: "Gestiona la velocidad de los vehículos y optimiza el uso de la plataforma integrando los dispositivos de seguridad requeridos en las distintas operaciones y faenas mineras.",
        urlImg: mineria,
        icon: GiMineTruck
    }, {
        title: "GPS Transporte por carretera",
        description: "Monitorea la velocidad, delimita las zonas de tránsito y establece alarmas para prevenir robos.Además, podrás supervisar la temperatura de los contenedores, asegurando el control de la cadena de frío en productos sensibles como alimentos o medicamentos.",
        urlImg: transporte,
        icon: FaTruckMoving
    }, {
        title: "Monitoreo para personal de seguridad",
        description: "Sigue en tiempo real la ubicación de los agentes, garantizando su seguridad y eficiencia, podrás rastrear sus movimientos, configurar alarmas en caso de emergencia, y recibir alertas instantáneas",
        urlImg: personal,
        icon: FaUserShield
    }
]