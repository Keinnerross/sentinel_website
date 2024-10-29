import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { RiCloseCircleFill } from "react-icons/ri";
import { IoReturnDownBack } from "react-icons/io5";
import { sucessful } from '../common/alerts/sucessful';
import { useNavigate } from 'react-router-dom';

const ServicesForm = () => {
    const [step, setStep] = useState(1);
    const [selectedVehicleTypes, setSelectedVehicleTypes] = useState([]);
    const [fleetSize, setFleetSize] = useState('');
    const [phone, setPhone] = useState('');
    const navigate = useNavigate();

    const goToHomePage = () => {
        navigate('/');
    };

    const handleNextStep = (e) => {
        e.preventDefault();
        setStep(step + 1);
    };

    const handlePreviousStep = (e) => {
        e.preventDefault();
        if (step > 1) {
            setStep(step - 1);
        }
    };

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        sucessful(false);

        emailjs
            .sendForm('service_7wlurj9', 'template_dc9w3dc', form.current, {
                publicKey: 'wFnHH8BHEebwedJ6Q',
            })
            .then(
                () => {

                    sucessful(true)
                    setTimeout(() => {
                        goToHomePage();
                    }, 2000)
                },
                () => {
                    alert("algo salió mal")
                }
            );



    };


    const handleVehicleTypeChange = (event) => {
        const selectedValue = event.target.value;
        if (selectedValue && !selectedVehicleTypes.includes(selectedValue)) {
            setSelectedVehicleTypes([...selectedVehicleTypes, selectedValue]);
        }
    };

    const removeVehicleType = (type) => {
        setSelectedVehicleTypes(selectedVehicleTypes.filter((t) => t !== type));
    };

    return (
        <form className='bg-slate-50 rounded-t-2xl rounded-b-3xl' ref={form} onSubmit={step === 1 ? handleNextStep : sendEmail}>
            <div className='max-w-md   px-6 pt-12 pb-12 text-gray-800 w-[90vw] md:w-[450px]'>
                <h1 className="text-3xl font-bold mb-6 text-center pb-4">¡Cotiza Ahora!</h1>
                {step === 1 && (
                    <>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">
                                Tipo de Vehículo
                            </label>
                            <div className="flex flex-wrap gap-2 mb-2">
                                {selectedVehicleTypes.map((type) => (
                                    <span
                                        key={type}
                                        className="bg-green-500 text-white rounded-full px-3 py-1 flex items-center"
                                    >
                                        {type}
                                        <button
                                            type="button"
                                            onClick={() => removeVehicleType(type)}
                                            className="ml-2 text-white hover:text-red-200"
                                        >
                                            <RiCloseCircleFill className='fill-white hover:fill-gray-200' />
                                        </button>
                                    </span>
                                ))}
                            </div>
                            <select
                                className="block w-full p-2 border border-gray-300 rounded-md"
                                onChange={(e) => handleVehicleTypeChange(e)}
                                required={selectedVehicleTypes.length === 0}
                                value={selectedVehicleTypes}
                            >
                                <option value="" disabled>
                                    Selecciona un tipo de vehículo
                                </option>
                                <option value=" Furgones o Camionetas">Furgones o Camionetas</option>
                                <option value=" Buses">Buses</option>
                                <option value=" Automóvil">Activos de Valor</option>
                                <option value=" Camiones">Camiones</option>
                                <option value=" Maquinaria">Maquinaria</option>
                                <option value=" Vehículos particulares">Vehículos particulares</option>
                                <option value=" Personal de Seguridad">Personal de Seguridad</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1" htmlFor="fleetSize">
                                Tamaño de la Flota
                            </label>
                            <select
                                onChange={(e) => setFleetSize(e.target.value)}
                                value={fleetSize}
                                className="block w-full p-2 border border-gray-300 rounded-md"
                                required
                            >
                                <option value="">Selecciona el tamaño de la flota</option>
                                <option value="1-5 Unidades">1-5 Vehículos</option>
                                <option value="6-10 Unidades">6-10 Vehículos</option>
                                <option value="11-20 Unidades">11-20 Vehículos</option>
                                <option value="21 a +">21 o más Vehículos</option>
                            </select>
                        </div>
                    </>
                )}
                {step === 2 && (
                    <>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">
                                Nombre
                            </label>
                            <input
                                type="text"
                                name="user_name"
                                className="block w-full p-2 border border-gray-300 rounded-md"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1" htmlFor="phone">
                                Número de Teléfono
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                className="block w-full p-2 border border-gray-300 rounded-md"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                name="user_phone"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">
                                Correo Electrónico
                            </label>
                            <input
                                name="user_email"
                                type="email"
                                className="block w-full p-2 border border-gray-300 rounded-md"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">
                                Mensaje <span className='text-gray-400'>(Opcional)</span>
                            </label>
                            <textarea
                                name="user_msj"
                                className="block w-full p-2 border border-gray-300 rounded-md"
                                placeholder=' Escribenos un mensaje'>
                            </textarea>
                        </div>
                        <div className="hidden">

                            <input
                                type="text"
                                defaultValue={selectedVehicleTypes}
                                name="tipo_vehiculo"
                            />
                            <input
                                type="text"
                                defaultValue={fleetSize}
                                name="flota"
                            />
                        </div>
                    </>
                )}
            </div>
            <div className="flex justify-between h-14 bg-blueMain rounded-b-2xl">
                {step > 1 && (
                    <button
                        type="button"
                        onClick={handlePreviousStep}
                        className="bg-blueMain text-white font-semibold  px-6 rounded-bl-2xl hover:bg-blueMainLight"
                    >
                        <IoReturnDownBack fill='white' size={20} />
                    </button>
                )}
                <div className='flex w-full justify-end'>
                    <button
                        type="submit"
                        className="bg-blueMain text-white font-semibold py-2 px-6 rounded-br-2xl hover:bg-blueMainLight"
                    >
                        {step === 1 ? 'Siguiente' : 'Solicitar'}
                    </button>
                </div>
            </div>
        </form>


    );
};

export default ServicesForm;
