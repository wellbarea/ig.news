
import { render, screen, fireEvent } from '@testing-library/react'
import { signIn, useSession } from 'next-auth/client'
import { useRouter } from 'next/router';

import { SubscribeButton } from '.'

jest.mock('next-auth/client')
jest.mock('next/router')

describe('SubscribeButton component', () => {
    it('renders correctly', () => {
        const useSessionMocked = jest.mocked(useSession);
        useSessionMocked.mockReturnValueOnce([null, false]);

        render(
            <SubscribeButton />
        )
    
        expect(screen.getByText('Subscribe now')).toBeInTheDocument();
    })

    it('redirects user to sign in when not authentication', () => {
        const useSessionMocked = jest.mocked(useSession);
        const signInMocked = jest.mocked(signIn);
        
        useSessionMocked.mockReturnValueOnce([null, false]);

        render(<SubscribeButton />)

        const subscribeButton = screen.getByText('Subscribe now')
        fireEvent.click(subscribeButton)

        expect(signInMocked).toHaveBeenCalled();
    })

    it('redirects to posts when user already has a subsctiption', () => {
        const useRouterMocked = jest.mocked(useRouter);
        const useSessionMocked = jest.mocked(useSession);
        
        const pushMock = jest.fn()
        useSessionMocked.mockReturnValueOnce([{
            user: {
                name: 'John Doe',
                email: 'john.doe@gmail.com',
            },
            expires: 'fake-expies',
            activeSubscription: 'fake-active'
        }, false])

        useRouterMocked.mockReturnValueOnce({
            push: pushMock
        } as any)

        render(<SubscribeButton />)

        const subscribeButton = screen.getByText('Subscribe now')
        fireEvent.click(subscribeButton)

        expect(pushMock).toHaveBeenCalledWith('/posts');
    })
})
