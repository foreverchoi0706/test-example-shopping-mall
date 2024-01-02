import { screen } from '@testing-library/react';
import React from 'react';

import { pageRoutes } from '@/apiRoutes';
import NotFoundPage from '@/pages/error/components/NotFoundPage';
import render from '@/utils/test/render';

const navigateSpy = vi.fn();

vi.mock('react-router-dom', async () => {
  const original = await vi.importActual('react-router-dom');
  return {
    ...original,
    useNavigate: () => navigateSpy,
  };
});

it('Home으로 이동 버튼 클릭시 홈 경로로 이동하는 navigate가 실행된다', async () => {
  const { user } = await render(<NotFoundPage />);
  await user.click(
    screen.getByRole('button', {
      name: 'Home으로 이동',
    }),
  );
  expect(navigateSpy).toHaveBeenNthCalledWith(1, pageRoutes.main, {
    replace: true,
  });
});
