import { useState, useEffect, useCallback, useMemo } from 'react';
import { fetchEmployees } from '../services/api';
import { Employee } from '../types';

/**
 * Hook personalizado para gerenciar a lista de funcionários, incluindo busca, carregamento e tratamento de erros.
 *
 * Este hook utiliza os hooks do React como useState, useEffect, useMemo e useCallback para gerenciar a lista de funcionários, realizar buscas, indicar o estado de carregamento e lidar com erros de requisição.
 *
 * @returns {Object} Um objeto contendo:
 * - employees {Employee[]}: Lista filtrada de funcionários. A filtragem é case-insensitive para nome e cargo e realiza uma busca por substring no número de telefone, com base no termo de busca.
 * - searchTerm {string}: Termo de busca atual usado para filtrar a lista de funcionários.
 * - isLoading {boolean}: Indica se a lista de funcionários está sendo carregada.
 * - error {string | null}: Mensagem de erro, se houver, em caso de falha na busca.
 * - handleSearchChange {(React.ChangeEvent<HTMLInputElement) => void}: Função para atualizar o termo de busca quando o usuário digita, recebendo um evento de mudança de input.
 */
export function useEmployees(): object {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
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
