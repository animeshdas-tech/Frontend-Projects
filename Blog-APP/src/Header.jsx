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
            <nav className='bg-white w-11/12 mx-auto flex justify-between'>
                <div className='flex my-auto w-fit justify-between '>
                    <div className=''>
                        LOGO
                    </div>
                    <div className='font-bold text-green-600 '>
                        Name
                    </div>
                </div>
                <ul className='flex w-fit '>
                    <div className='absolute md:top-3 justify-between bottom-0 w-full left-0 md:relative md:w-fit bg-white md:bg-transparent h-20'>
                        <div className='w-fit mx-auto flex h-full '>
                            {
                                nevitems.map((item) => (
                                    item.active ? <li key={item.name}>
                                        <Button className=' hover:text-green-600 focus:text-green-600 focus:bg-slate-200' onClick={() => nevigate(item.slug)}>
                                            {item.name}
                                        </Button>
                                    </li> : null
                                ))
                            }
                        </div>
                    </div>
                </ul>
                {
                    authStatus && (<li className='my-auto h-20 md:h-fit list-none'>
                        <Logout />
                    </li>)
                }
            </nav>
        </header>
    )
}

export default Header