import { ApiResponse, Employee } from '../types';

const API_BASE_URL = 'http://localhost:3000';

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
