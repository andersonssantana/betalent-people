import { useState, useEffect } from 'react';
import { fetchEmployees } from '../services/api';
import { Employee } from '../types';

export function useEmployees() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getEmployees = async () => {
      setIsLoading(true);
      try {
        const response = await fetchEmployees();
        if (response.status !== 200) {
          throw new Error(response.message || 'Falha ao buscar funcionários');
        }
        setEmployees(response.data || []);
      } catch (err) {
        setError((err instanceof Error) ? err.message : 'Erro desconhecido');
      } finally {
        setIsLoading(false);
      }
    };
    getEmployees();
  }, []);
  return { employees, isLoading, error };
}
