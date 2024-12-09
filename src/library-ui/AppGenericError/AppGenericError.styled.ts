import styled from 'styled-components';

// Container for the error message
export const Container = styled.div`
  text-align: center;
  padding: 2rem;
`;

// Wrapper for action buttons
export const Actions = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
`;

// Styled button
export const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
