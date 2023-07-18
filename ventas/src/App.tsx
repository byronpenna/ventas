// import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import ReservationsForm from './Reservation';

function App() {
    return (
        <Router>
            <div className="container mx-auto px-4 py-8">
                <nav className="flex justify-center mb-8">
                    <Link
                        to="/reservation"
                        className="text-blue-500 font-semibold hover:text-blue-700"
                    >
                        Reservación
                    </Link>
                </nav>
                <Routes>
                    <Route path="/reservation" element={<ReservationsForm />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
