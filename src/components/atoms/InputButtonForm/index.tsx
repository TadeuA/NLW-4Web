import React, { useState, useRef, memo, useCallback } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Container } from './styles';
import InputButtonFromProps from './interface';

const InputButtonForm: React.FC<InputButtonFromProps> = ({
  name,
  onSubmit,
  onFocus,
  onBlur,
  ...rest
}: InputButtonFromProps) => {
  const [value, setValue] = useState('');
  const [isFocus, setIsFocus] = useState(false);
  const handleSubmit = useCallback(
    event => {
      event.preventDefault();
      onSubmit();
    },
    [onSubmit],
  );

  return (
    <Container
      onSubmit={handleSubmit}
      isFocus={isFocus}
      isFilled={value.length > 0}
    >
      <input
        name={name}
        {...rest}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={event => setValue(event.target.value)}
        placeholder="Digite seu username"
      />
      <button type="submit">
        <FiArrowRight size="1.5rem" />
      </button>
    </Container>
  );
};
export default memo(InputButtonForm);
