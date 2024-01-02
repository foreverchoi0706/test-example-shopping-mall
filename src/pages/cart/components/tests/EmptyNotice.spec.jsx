import { screen } from '@testing-library/react';
import React from 'react';

import { pageRoutes } from '@/apiRoutes';
import EmptyNotice from '@/pages/cart/components/EmptyNotice';
import render from '@/utils/test/render';

const navigate = vi.fn();

vi.mock('react-router-dom', async () => {
  const original = await vi.importActual('react-router-dom');
  return { ...original, useNavigate: () => navigate };
});

it('"홈으로 가기" 링크를 클릭할경우 "/"경로로 navigate함수가 호출된다', async () => {
  const { user } = await render(<EmptyNotice />);
  await user.click(screen.getByRole('link'));
  expect(navigate).toBeCalledWith(pageRoutes.main);
});