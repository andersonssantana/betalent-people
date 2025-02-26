import { useState, useEffect, useCallback, useMemo } from 'react';
import { fetchEmployees } from '../services/api';
import { Employee } from '../types';

export function useEmployees() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
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

        setEmployees(response.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erro desconhecido');
      } finally {
        setIsLoading(false);
      }
    };

    getEmployees();
  }, []);

  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(e.target.value);
    },
    []
  );

  const filteredEmployees = useMemo(() => {
    if (!searchTerm) return employees;

    const term = searchTerm.toLowerCase();

    return employees.filter((employee) => 
      employee.name.toLowerCase().includes(term) ||
      employee.job.toLowerCase().includes(term) ||
      employee.phone.includes(term)
    );
  }, [employees, searchTerm]);

  return {
    employees: filteredEmployees,
    searchTerm,
    isLoading,
    error,
    handleSearchChange
  };
};
