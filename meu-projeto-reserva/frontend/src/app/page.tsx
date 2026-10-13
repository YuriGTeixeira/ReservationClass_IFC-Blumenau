'use client';

import React from 'react';
import { ReservationBadge } from '../components/ReservationBadge';

// Tipagem e dados mockados isolados ou prontos para vir de um service/API
interface Laboratory {
  id: number;
  name: string;
  reservations: Array<{ id: string; time: string; user?: string; status?: 'booked' | 'blocked' }>;
}

const LABORATORIES: Laboratory[] = [
  { 
    id: 1, 
    name: 'Lab Info 1 B3-P1',
    reservations: [
      { id: '1', time: '20:00 - 21:05', user: 'SAULO VARGAS', status: 'booked' },
      { id: '2', time: '22:30 - 00:00', status: 'blocked' }
    ]
  },
  { id: 2, name: 'Lab Info 2 B3-P1', reservations: [] },
  { id: 3, name: 'Lab Info 3 B3-P1', reservations: [] },
  { id: 4, name: 'Lab Info 4 B3-P1', reservations: [] },
  { id: 5, name: 'Lab Info 5 | Redes B3-P1', reservations: [] },
];

const CURRENT_DAY = "Sexta, 23/01/2026";

export default function ReservationsPage() {
  const handleCreateReservation = (labName: string) => {
    // Futura navegação para a tela de nova reserva passando o laboratório selecionado
    alert(`Redirecionando para criar reserva em: ${labName}`);
  };

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        
        {/* Cabeçalho do Sistema */}
        <header className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Sistema de Reservas - SIVA</h1>
          <span className="text-sm bg-blue-700 px-3 py-1 rounded">Usuário Conectado</span>
        </header>

        {/* Barra de Data Atual */}
        <div className="bg-blue-500 text-white px-6 py-2 font-semibold">
          {CURRENT_DAY}
        </div>

        {/* Grade de Recursos (Estilo IFSC) */}
        <div className="divide-y divide-gray-200">
          {LABORATORIES.map((lab) => (
            <div key={lab.id} className="flex flex-col md:flex-row items-stretch hover:bg-gray-50 transition-colors">
              
              {/* Coluna do Artefato / Laboratório */}
              <div className="w-full md:w-1/3 p-4 flex items-center font-medium text-blue-800 border-b md:border-b-0 md:border-r border-gray-200">
                <span className="mr-2">ℹ️</span> {lab.name}
              </div>

              {/* Coluna da Timeline / Slots de Horário */}
              <div className="w-full md:w-2/3 p-4 flex flex-wrap gap-2 items-center">
                {lab.reservations.map((res) => (
                  <ReservationBadge 
                    key={res.id} 
                    time={res.time} 
                    user={res.user} 
                    status={res.status} 
                  />
                ))}

                {/* Botão de Ação */}
                <button 
                  onClick={() => handleCreateReservation(lab.name)}
                  className="border border-dashed border-gray-400 text-gray-600 hover:border-blue-500 hover:text-blue-600 text-xs px-3 py-1.5 rounded flex items-center gap-1 transition-all"
                >
                  <span>➕</span> Criar Reservas
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </main>
  );
}