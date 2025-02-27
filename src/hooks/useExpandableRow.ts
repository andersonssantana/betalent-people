import { useState, useCallback } from 'react';

/**
 * Hook para gerenciar estados e callbacks de linha expansível
 * com suporte a animações
 * 
 * @param animationDuration Duração da animação em ms
 * @returns Estados e handlers para componentes expansíveis
 */
export function useExpandableRow(animationDuration = 300) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [isClosing, setIsClosing] = useState<boolean>(false);

  const toggleExpand = useCallback(() => {
    if (isExpanded) {
      setIsClosing(true);
      // Espera a animação terminar antes de fechar de fato
      setTimeout(() => {
        setIsExpanded(false);
        setIsClosing(false);
      }, animationDuration);
    } else {
      setIsExpanded(true);
    }
  }, [isExpanded, animationDuration]);

  return {
    isExpanded,
    isClosing,
    toggleExpand
  };
}
