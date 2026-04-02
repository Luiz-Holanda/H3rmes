import React from 'react';

const History: React.FC = () => {
  const historyItems = [
    { date: '02 Mai, 2024', description: 'Cadeira de Escritório Ergonômica', code: '#HRM-88210', status: 'Entregue' },
    { date: '28 Abr, 2024', description: 'Monitor 27" 4K HDR', code: '#HRM-77129', status: 'Entregue' },
  ];

  return (
    <div className="bg-surface-container-lowest p-8 rounded-lg border border-surface-container">
      <h2 className="text-xl font-headline font-bold text-on-surface mb-6">Histórico Recente</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-separate border-spacing-y-3">
          <thead>
            <tr className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">
              <th className="px-4 py-2">Data</th>
              <th className="px-4 py-2">Descrição</th>
              <th className="px-4 py-2">Código</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2"></th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {historyItems.map((item, index) => (
              <tr key={index} className="bg-surface rounded-lg hover:bg-surface-container-low transition-colors">
                <td className="px-4 py-4 rounded-l-lg text-on-surface-variant font-medium">{item.date}</td>
                <td className="px-4 py-4 font-bold">{item.description}</td>
                <td className="px-4 py-4 font-mono text-xs">{item.code}</td>
                <td className="px-4 py-4">
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold uppercase">{item.status}</span>
                </td>
                <td className="px-4 py-4 rounded-r-lg text-right">
                  <button className="text-primary hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined">receipt_long</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default History;
