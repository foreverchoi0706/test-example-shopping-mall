import { screen } from '@testing-library/react';
import React from 'react';

import ErrorPage from '@/pages/error/components/ErrorPage';
import render from '@/utils/test/render';

const navigateSpy = vi.fn();

vi.mock('react-router-dom', async () => {
  const original = await vi.importActual('react-router-dom');
  return {
    ...original,
    useNavigate: () => navigateSpy,
  };
});

it('"뒤로 이동" 버튼 클릭시 뒤로 이동하는 navigate(-1) 함수가 호출된다', async () => {
  const { user } = await render(<ErrorPage />);
  const target = screen.getByRole('button', {
    name: '뒤로 이동',
  });
  await user.click(target);
  expect(navigateSpy).toHaveBeenNthCalledWith(1, -1);
});
