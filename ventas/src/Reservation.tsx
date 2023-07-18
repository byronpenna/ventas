import  { useState } from 'react';

const ReservationsForm = () => {
    const [name, setName] = useState<string>("");
    const [date, setDate] = useState<string>("");
    const [time, setTime] = useState<string>("");
    const [reservations, setReservations] = useState<{name:string,date:string,time:string}[] | []>([]);
    const [availableTimes] = useState<string[]>([
        "08:00", "09:00", "10:00", "11:00", "12:00", "13:00",
        "14:00", "15:00", "16:00", "17:00", "18:00", "19:00"]
    );

    const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (availableTimes.includes(time)) {
            setReservations([
                ...reservations,
                { name: name, date: date, time: time },
            ]);
            setName("");
            setDate("");
            setTime("");
        } else {
            alert("El horario seleccionado no está disponible.");
        }
    };
    const chunkArray = (arr:string[], chunkSize:number) => {
        let R = [];
        for (let i=0,len=arr.length; i<len; i+=chunkSize)
            R.push(arr.slice(i,i+chunkSize));
        return R;
    }

    const timesInRows = chunkArray(availableTimes, 5);
    return (
        <div className="flex items-center justify-center h-screen bg-gray-200">
            <div className={`flex flex-col w-1/2`}>
                <div className="w-full mb-4">
                    <h2 className="text-2xl mb-5">Horarios disponibles:</h2>
                    <table className="border-collapse border border-gray-500 w-full">
                        <tbody>
                        {timesInRows.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {row.map((time:string, index:number) => (
                                    <td key={index} className="border border-gray-500 p-2">{time}</td>
                                ))}
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
                <form className="mt-2 p-10 bg-white rounded shadow-md w-full" onSubmit={handleSubmit}>
                    <div className="mb-5">
                        <label className="block text-gray-700">Nombre:</label>
                        <input
                            className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-md"
                            type="text"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                        />
                    </div>
                    <div className="mb-5">
                        <label className="block text-gray-700">Fecha:</label>
                        <input
                            className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-md"
                            type="date"
                            value={date}
                            onChange={(event) => setDate(event.target.value)}
                        />
                    </div>
                    <div className="mb-5">
                        <label className="block text-gray-700">Hora:</label>
                        <input
                            className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-md"
                            type="time"
                            value={time}
                            onChange={(event) => setTime(event.target.value)}
                        />
                    </div>
                    <button className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-500" type="submit">Agregar reserva</button>
                </form>
                <div className="flex mt-10 w-full flex-col">
                    <h2 className="flex text-2xl mb-5">Reservas:</h2>
                    <table className=" border-collapse border border-gray-500 w-full">
                        <thead>
                        <tr>
                            <th className="border border-gray-500">Nombre</th>
                            <th className="border border-gray-500">Fecha</th>
                            <th className="border border-gray-500">Hora</th>
                        </tr>
                        </thead>
                        <tbody>
                        {reservations.map((res, index) => (
                            <tr key={index}>
                                <td className="border border-gray-500">{res.name}</td>
                                <td className="border border-gray-500">{res.date}</td>
                                <td className="border border-gray-500">{res.time}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );

};

export default ReservationsForm;
