import React from 'react'
import { Navbar, Dropdown, Button, Menu } from 'react-daisyui'
import * as CONSTANTS from '../../../constants.jsx'

function TopNav() {
    return (
        <div className="flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
            <Navbar>
                <Navbar.Start className="hidden lg:flex">
                    <Menu horizontal className="p-0">
                        {CONSTANTS.NAV_MENU.map((options) => {
                            return (
                                typeof options === 'object' ?
                                    Object.keys(options).map((result) => {
                                        return (
                                            <Menu.Item>
                                                <a>
                                                    {result}
                                                    <svg
                                                        className="fill-current"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={20}
                                                        height={20}
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                                                    </svg>
                                                </a>

                                                <Menu className="p-2 bg-base-100">
                                                    {options[result].map((hiddenMenu) => {
                                                        return (
                                                            <Menu.Item>
                                                                <a>{hiddenMenu}</a>
                                                            </Menu.Item>
                                                        )
                                                    })}
                                                </Menu>
                                            </Menu.Item>
                                        )
                                    }
                                    ) :
                                    <Menu.Item>
                                        <a>{options}</a>
                                    </Menu.Item>
                            )
                        })
                        }

                    </Menu>
                </Navbar.Start>
                <Navbar.Center >
                    <Dropdown>
                        <Button color="ghost" tabIndex={0} className="lg:hidden px-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </Button>
                        <Dropdown.Menu tabIndex={0} className="w-52 menu-compact mt-3">
                            {CONSTANTS.NAV_MENU.map((options) => {
                                return (
                                    typeof options === 'object' ?
                                        Object.keys(options).map((result) => {
                                            return (

                                                <li tabIndex={0}>
                                                    <a className="justify-between">
                                                        {result}
                                                        <svg
                                                            className="fill-current"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={24}
                                                            height={24}
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                                                        </svg>
                                                    </a>
                                                    <ul className="p-2 bg-base-100">
                                                        {options[result].map((hiddenMenu) => {
                                                            return (
                                                                <li>
                                                                    <a>{hiddenMenu}</a>
                                                                </li>
                                                            )
                                                        })}
                                                    </ul>
                                                </li>
                                            )

                                        })
                                        : <Dropdown.Item>{options}</Dropdown.Item>
                                )
                            }
                            )}

                        </Dropdown.Menu>
                    </Dropdown>
                    <a className="btn btn-ghost normal-case text-xl px-1 ">
                        <img
                            src="https://assets.icliniq.com/v2/assets/images/iCliniq-logo/ic-white-logo.svg"
                            className="mx-3 h-10 sm:h-9 "
                            alt="iCliniq Logo"
                        />
                    </a>
                </Navbar.Center>
            </Navbar>
        </div>
    )
}

export default TopNav