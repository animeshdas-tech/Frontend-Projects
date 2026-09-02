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
        <header className='md:py-2'>
            <ul className='flex bg-white'>
                    <div className='flex absolute md:top-2 justify-between bottom-0 w-full md:w-fit bg-white md:bg-transparent h-20'>
                        {
                            nevitems.map((item) => (
                                item.active ? <li key={item.name}>
                                    <Button className=' hover:text-green-600 ' onClick={() => nevigate(item.slug)}>
                                        {item.name}
                                    </Button>
                                </li> : null
                            ))
                        }
                    </div>
                {
                    authStatus && (<li className='ml-auto h-20 md:h-fit'>
                        <Logout />
                    </li>)
                }
            </ul>
        </header>
    )
}

export default Header