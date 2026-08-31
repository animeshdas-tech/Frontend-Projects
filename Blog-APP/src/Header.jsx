import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Logout from './Logout'
import Button from './Button'

function Header() {
    const authStatus = useSelector((state) => state.Auth.status)
    const nevigate = useNavigate()
    const nevitems = [
        {
            name: "Home",
            slug: '/',
            active: true
        },
        {
            name: 'Login',
            slug: '/Login',
            active: !authStatus
        },
        {
            name: 'Signup',
            slug: '/Signup',
            active: !authStatus
        },
        {
            name: 'Add Post',
            slug: '/AddPost',
            active: authStatus
        },
        {
            name: 'All Posts',
            slug: '/AllPosts',
            active: authStatus
        },
        {
            name: 'My Account',
            slug: '/MyAccount',
            active: authStatus
        }
    ]
    return (
        <header className='fixed w-full '>
            <ul className='flex bg-slate-300'>
                <div className='fixed bottom-0 md:relative w-full'>
                    <div className='absolute bottom-2 md:bottom-0 justify-between md:justify-center items-center w-full flex bg-slate-300'>
                        {
                            nevitems.map((item) => (
                                item.active ? <li key={item.name}>
                                    <Button className=' hover:text-green-600' onClick={() => nevigate(item.slug)}>
                                        {item.name}
                                    </Button>
                                </li> : null
                            ))
                        }
                    </div>
                </div>
                {
                    authStatus && (<li className='ml-auto'>
                        <Logout />
                    </li>)
                }
            </ul>
        </header>
    )
}

export default Header