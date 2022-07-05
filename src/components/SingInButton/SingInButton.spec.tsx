
import { render, screen } from '@testing-library/react'
import { useSession } from 'next-auth/client'
import { SingInButton } from '.'

jest.mock('next-auth/client')

describe('SingInButton component', () => {
    it('renders correctly when user is not authentication', () => {
        const useSessionMocked = jest.mocked(useSession)
        //mockReturnValueOnce => moca somente esse teste 
        useSessionMocked.mockReturnValueOnce([null, false])
        
        render(<SingInButton />)
    
        expect(screen.getByText('Sign in with Github')).toBeInTheDocument();
    })

    it('renders correctly when user is authentication', () => {
        const useSessionMocked = jest.mocked(useSession)
        useSessionMocked.mockReturnValueOnce([{
            user: {
                name: 'John Doe',
                email: 'john.doe@gmail.com',
            },
            expires: 'fake-expies'
        }, false])
        
        render(<SingInButton />)
    
        expect(screen.getByText('John Doe')).toBeInTheDocument();
    })
})
