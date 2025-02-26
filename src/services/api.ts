import { ApiResponse, Employee } from '../types';

/**
 * URL base da API.
 * @constant {string}
 */
const API_BASE_URL = 'http://localhost:3000';

/**
 * Busca a lista de funcionários a partir da API.
 *
 * Realiza uma requisição HTTP para obter os funcionários e retorna uma Promise com um objeto
 * contendo os dados dos funcionários, o status da requisição e, em caso de erro, uma mensagem.
 *
 * @async
 * @function fetchEmployees
 * @returns {Promise<ApiResponse<Employee[]>>} Uma Promise que resolve para um objeto com os seguintes campos:
 * - **data**: Array de funcionários (Employee[]).
 * - **status**: Código de status HTTP da requisição.
 * - **message**: (Opcional) Mensagem de erro caso ocorra alguma falha.
 */
export const fetchEmployees = async (): Promise<ApiResponse<Employee[]>> => {
  try {
    const response = await fetch(`${API_BASE_URL}/employees`);
    const data = await response.json();
    
    return {
      data,
      status: response.status,
    };
  } catch (error) {
    return {
      data: [],
      status: 500,
      message: error instanceof Error ? error.message : 'Erro desconhecido'
    };
  }
};
